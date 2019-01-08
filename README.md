aws-pinpoint
============

Simple utility for creating, updating, and deleting aws pinpoint projects

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/aws-pinpoint.svg)](https://npmjs.org/package/aws-pinpoint)
[![Downloads/week](https://img.shields.io/npm/dw/aws-pinpoint.svg)](https://npmjs.org/package/aws-pinpoint)
[![License](https://img.shields.io/npm/l/aws-pinpoint.svg)](https://github.com/aws-utilities/aws-pinpoint/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g aws-pinpoint
$ aws-pinpoint COMMAND
running command...
$ aws-pinpoint (-v|--version|version)
aws-pinpoint/0.0.0 darwin-x64 node-v10.9.0
$ aws-pinpoint --help [COMMAND]
USAGE
  $ aws-pinpoint COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`aws-pinpoint create`](#aws-pinpoint-create)
* [`aws-pinpoint delete`](#aws-pinpoint-delete)
* [`aws-pinpoint update`](#aws-pinpoint-update)
* [`aws-pinpoint help [COMMAND]`](#aws-pinpoint-help-command)

## `aws-pinpoint create`

Create an AWS Pinpoint project.

```
USAGE
  $ aws-pinpoint create --profile <admin-account-profile> \
                        --roleARN <arn-of-role-to-assume> \
                        --appName <pinpoint-app-name> \
                        --region <aws-region-name>

OPTIONS
  --profile=profile  The name of the saved AWS profile to use for credentials.
                     this is intended to be the organizational, 
                     or admin, account.
                     
  --roleARN=roleARN  the Amazon Resource Name (ARN) of the role to assume when 
                     creating the Pinpoint project. for cross account access,
                     this should be an admin privileged role for an account 
                     within your AWS Organization.
  
  --appName=appName  the name of the AWS Pinpoint app or project that 
                     will be created.
                     
  --region=region.   the name of the region within which the AWS Pinpoint app
                     or project will be created.

```

_See code: [src/commands/create.js](https://github.com/aws-utilities/aws-pinpoint/blob/v0.0.0/src/commands/create.js)_

## `aws-pinpoint delete`

Describe the command here

```
USAGE
  $ aws-pinpoint delete

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/delete.js](https://github.com/aws-utilities/aws-pinpoint/blob/v0.0.0/src/commands/delete.js)_

## `aws-pinpoint update`

Describe the command here

```
USAGE
  $ aws-pinpoint update

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/update.js](https://github.com/aws-utilities/aws-pinpoint/blob/v0.0.0/src/commands/update.js)_

## `aws-pinpoint help [COMMAND]`

display help for aws-pinpoint

```
USAGE
  $ aws-pinpoint help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.4/src/commands/help.ts)_

<!-- commandsstop -->
