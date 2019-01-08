const {Command, flags} = require('@oclif/command')
const { configurePinpointAPI } = require('../api/pinpoint');

const commandDebug = require('debug')('pinpoint:src:commands:delete');

class DeleteCommand extends Command {
  async run() {
    commandDebug('DeleteCommand run()');
    const {flags} = this.parse(DeleteCommand)
    const { profile, appId, region, roleARN } = flags;
    const pinpointAPI = await configurePinpointAPI(profile, roleARN);
    const deletePinpointAppResult = await pinpointAPI.deletePinpointApp(appId, region);
    this.log(JSON.stringify(deletePinpointAppResult, null, 2));
    this.exit();
  }
}

DeleteCommand.description = `Deletes an AWS Pinpoint app
...
`

DeleteCommand.flags = {
  profile: flags.string({
    char: 'p',
    description: 'aws named profile',
    required: true,
  }),
  roleARN: flags.string({
    description: 'arn of role to assume',
    required: true,
  }),
  appId: flags.string({
    char: 'a',
    description: 'id of pinpoint app to be deleted',
    required: true,
  }),
  region: flags.string({
    char: 'r',
    description: 'aws region where the pinpoint app to be deleted resides',
    required: true,
  }),
}

module.exports = DeleteCommand
