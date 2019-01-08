const {Command, flags} = require('@oclif/command')
const { configurePinpointAPI } = require('../api/pinpoint');

const commandDebug = require('debug')('pinpoint:src:commands:update');

class UpdateCommand extends Command {
  async run() {
    commandDebug('UpdateCommand run()');
    const {flags} = this.parse(UpdateCommand)
    const { profile, appName, appId, region, roleARN } = flags;
    const pinpointAPI = await configurePinpointAPI(profile, roleARN);
    const updatePinpointAppResult = await pinpointAPI.updatePinpointApp(appId, appName, region);
    this.log(JSON.stringify(updatePinpointAppResult, null, 2));
    this.exit();
  }
}

UpdateCommand.description = `
...
Updates an AWS Pinpoint app by deleting
the current instance and creating a new one.
`

UpdateCommand.flags = {
  profile: flags.string({
    description: 'aws named profile',
    required: true,
  }),
  roleARN: flags.string({
    description: 'arn of role to assume',
    required: true,
  }),
  appName: flags.string({
    description: 'name of pinpoint app to be updated',
    required: true,
  }),
  appId: flags.string({
    description: 'id of pinpoint app to be updated',
    required: true,
  }),
  region: flags.string({
    description: 'aws region where the pinpoint app to be updated resides',
    required: true,
  }),
}

module.exports = UpdateCommand
