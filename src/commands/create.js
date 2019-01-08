const {Command, flags} = require('@oclif/command');
const { configurePinpointAPI } = require('../api/pinpoint');

const commandDebug = require('debug')('pinpoint:src:commands:create');

class CreateCommand extends Command {
  async run() {
    commandDebug('run()');
    const { flags } = this.parse(CreateCommand);
    const { profile, appName, region, roleARN } = flags;
    const pinpointAPI = await configurePinpointAPI(profile, roleARN);
    const createPinpointAppResult = await pinpointAPI.createPinpointApp(appName, region);
    this.log(JSON.stringify(createPinpointAppResult, null, 2));
    this.exit();
  }
}

CreateCommand.description = `create an AWS Pinpoint app
...
`

CreateCommand.flags = {
  profile: flags.string({
    char: 'p',
    description: 'aws named profile',
    required: true,
  }),
  roleARN: flags.string({
    description: 'arn of role to assume',
    required: true,
  }),
  appName: flags.string({
    char: 'a',
    description: 'name of pinpoint app to be created',
    required: true,
  }),
  region: flags.string({
    char: 'r',
    description: 'aws region in which this pinpoint app will be created',
    required: true,
  }),
}

module.exports = CreateCommand
