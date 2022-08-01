---
sidebar_position: 6
---

# Installing and Managing Solutions

## Solution Manual

Check out the solution details: `mutablesecurity --solution <solution>`. The `<solution>` parameter is the identifier of the solution and can eventually be found in the manual of MutableSecurity.

The information here can be easily correlated with the one from the starter guide, especially from [indexes](basics/Indexes).

## Deployment Details Selection

Select a [deployment style](./Selecting%20the%20Deployment%20Style.md) and, eventually, an [authentication method](Selecting%20an%20Authentication%20Method%20for%20Remote%20Deployment.md). The process result in a bunch of parameters that will be attached to every command above.

## Pre-deployment Configuration

Initialize the solutions' configuration files by running `mutablesecurity --solution <solution> --operation INIT`. For each target host, a YAML file will be created in the working folder.

Edit with your preferred text editor the values of the keys from configuration files, according to the desired solutions' configuration.

## Installation

Install the solutions with `mutablesecurity --solution <solution> --operation INSTALL`.

## Tests

Execute the tests of the installed solution: all of them, with `mutablesecurity --solution <solution> --operation TEST`, or only one, with `mutablesecurity --solution <solution> --operation TEST --identifier <test_id>`. The identifier of each test, `<test_id>`, can be found in solution's manual.

## Information Retrieval

All information can be retrieved with `mutablesecurity --solution <solution> --operation GET_INFORMATION`. Attach `--identifier <info_id>` to retrieve only one, where the test identifier can be found in the manual.

## Information Setting

An information can be set with the command `mutablesecurity --solution <solution> --operation SET_INFORMATION --identifier <info_id> --value <new_value>`.

`<new_value>` needs to be the stringified version of the information, respecting its real type. Examples are:
- The boolean `True` became the string `"True"
- The integer `10` became the string `"10"`.
- The string `"string"` remains unaltered.
- A member named `ENABLED`, from an enumeration `State`, became the string `"ENABLED"`
- A list of any type exemplified above, for example `[1, 2, 3]`, became the string `"1,2,3"`.

## Log Retrieval

The log messages from a log source identified by `<log_id>` can be retrieved using `mutablesecurity --solution <solution> --operation GET_LOGS --identifier <log_id>`.

## Action Execution

An action `<action_id>` of the solution can be executed with `mutablesecurity --solution <solution> --operation EXECUTE --identifier <action_id> --arguments <argument_id>=<argument_value>`. The final part, starting with the `--arguments` parameter, denotes the mandatory arguments of the action. The identifiers and types of possible values can be found in the manual.

## Update

Uninstall the solutions with `mutablesecurity --solution <solution> --operation UPDATE`.

## Uninstallation

Uninstall the solutions with `mutablesecurity --solution <solution> --operation UNINSTALL`.