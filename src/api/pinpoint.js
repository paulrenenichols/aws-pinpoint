const AWS = require('aws-sdk');

const apiDebug = require('debug')('pinpoint:src:api:pinpoint');

function assumeRole(roleARN) {
  apiDebug('assumeRole()');
  const sts = new AWS.STS();
  return sts.assumeRole({
    RoleArn: roleARN,
    RoleSessionName: 'pinpoint-session',
  }).promise().then((assumeRoleResult) => {
    const assumeRoleCredentials = Object.assign({}, assumeRoleResult.Credentials);

    const roleCredentials = {
      accessKeyId: assumeRoleCredentials.AccessKeyId,
      secretAccessKey: assumeRoleCredentials.SecretAccessKey,
      sessionToken: assumeRoleCredentials.SessionToken
    };

    return AWS.config.update({
      credentials: roleCredentials,
    });
  });
}

function changeRegion(region) {
  apiDebug('changeRegion()');

  return AWS.config.update({
    region,
  });
}

async function configurePinpointAPI(profile, roleARN, region) {
  apiDebug('configurePinpointAPI()');

  const credentials = new AWS.SharedIniFileCredentials({ profile });
  AWS.config.credentials = credentials;

  if (roleARN) {
    await assumeRole(roleARN);
  }

  if (region) {
    changeRegion(region);
  }

  function createPinpointApp(pinpointAppName) {
    apiDebug('createPinpointApp()');
    const pinpoint = new AWS.Pinpoint({ apiVersion: '2016-12-01' });
    const createParams = {
        CreateApplicationRequest: {
            Name: pinpointAppName
        }
    };
    return pinpoint.createApp(createParams).promise();
  }

  function deletePinpointApp(pinpointAppId) {
    apiDebug('deletePinpointApp()');
    const pinpoint = new AWS.Pinpoint({ apiVersion: '2016-12-01' });
    const deleteParams = {
        ApplicationId: pinpointAppId,
    };
    return pinpoint.deleteApp(deleteParams).promise();
  }

  function updatePinpointApp(pinpointAppId, pinpointAppName) {
    apiDebug('updatePinpointApp()');
    const pinpoint = new AWS.Pinpoint({ apiVersion: '2016-12-01' });
    const deleteParams = {
        ApplicationId: pinpointAppId,
    };
    const createParams = {
        CreateApplicationRequest: {
            Name: pinpointAppName
        }
    };
    return pinpoint.deleteApp(deleteParams).promise().then(() => pinpoint.createApp(createParams).promise());
  }

  return {
    createPinpointApp,
    deletePinpointApp,
    updatePinpointApp,
  };
}

module.exports = {
  configurePinpointAPI,
};
