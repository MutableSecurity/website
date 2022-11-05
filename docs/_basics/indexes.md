---
sidebar_position: 5
---

# Indexes

## Maturity Levels

| Level               | Description                                                                                   |
| ------------------- | --------------------------------------------------------------------------------------------- |
| `PRODUCTION`        | The solution is developed, tested and integrated in the production package.                   |
| `REFACTORING`       | The solution was integrated in production, but now suffers changes.                           |
| `UNDER_DEVELOPMENT` | The solution development is started and in progress.                                          |
| `DEV_ONLY`          | The solution is only for development/testing purposes only, not accessible for regular users. |

## Solutions Categories

| Category         | Description                             |
| ---------------- | --------------------------------------- |
| `WEB_IDS`        | Web Intrusion Detection System          |
| `NETWORK_IDPS`   | Network Detection and Prevention System |
| `WEB_ENCRYPTION` | Encryption for Web Applications         |
| `NONE`           | No Security                             |

## Test Types

| Type          | Verified Aspect                                                            | Automatic Verifications                                                                  | Example                                                |
| ------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| `REQUIREMENT` | The system is compatible.                                                  | On solution installation, all tests needs to pass.                                       | The operating system is Ubuntu.                        |
| `PRESENCE`    | The solution is installed on the machine.                                  | On solution installation, all needs to fail. In all other operations, all needs to pass. | Suricata's executable is present.                      |
| `OPERATIONAL` | The solution is running (with or without achieving its security purposes). |                                                                                          | Suricata's process is running.                         |
| `SECURITY`    | The solution achieves its security-related goals.                          |                                                                                          | The firewall detects artificial malicious traffic.     |
| `INTEGRATION` | The solution integrates with other components of the infrastructure.       |                                                                                          | The threat hunting agent communicate with its manager. |

## Information Properties

| Property                        | Description                                                                                                                                                             | Another Required Properties  | Example                                                       |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------------- |
| `CONFIGURATION`                 | Information required to make a solution operable                                                                                                                        |                              | Quarantine folder for an antivirus                            |
| `METRIC`                        | Read-only information that is exposed by the solution, describing its functioning                                                                                       | `READ_ONLY`                  | Number of blocked malware by an antivirus                     |
| `MANDATORY`                     | Required to be set during the whole functioning of the solution                                                                                                         | `CONFIGURATION`              | Email where an XDR sends its critical alerts                  |
| `OPTIONAL`                      | Optional to set                                                                                                                                                         | `CONFIGURATION`              | Additional threat hunting sources for an IDS                  |
| `WITH_DEFAULT_VALUE`            | With a default (recommended) value. If it is not specified in the local configuration file of the solution, this value is used.                                         | `CONFIGURATION`              | Default 443 port for an HTTPS web server                      |
| `NON_DEDUCTIBLE`                | With a value that is not deductible from querying the host. The only way MutableSecurity finds its value is by inspecting the local configuration file of the solution. | `CONFIGURATION`, `MANDATORY` | Port on which a web server that needs to be protected listens |
| `AUTO_GENERATED_BEFORE_INSTALL` | With a value auto-generated before installation                                                                                                                         | `CONFIGURATION`, `READ_ONLY` | A random password, generated after installing Wazuh           |
| `AUTO_GENERATED_AFTER_INSTALL`  | With a value auto-generated after installation                                                                                                                          | `CONFIGURATION`, `READ_ONLY` | A random password, generated after installing Wazuh           |
| `READ_ONLY`                     | The value could not be written, only read.                                                                                                                              |                              | Any metric                                                    |
| `WRITABLE`                      | The value could be written and read.                                                                                                                                    |                              | A server on which an agent reports                            |

## Log Formats

| Format | Description           |
|--------|-----------------------|
| `JSON` | JSON                  |
| `TEXT` | Single-line plaintext |

## `.mutablesecurity` Keys

| Key                      | Description                                                   | Possible Values                                       |
|--------------------------|---------------------------------------------------------------|-------------------------------------------------------|
| `developer_mode`         | Indicates if the person using MutableSecurity is a developer. | `False` for users (implicit) or `True` for developers | 
| `application_monitoring` | Indicates if the application monitoring is enabled.           | `True` if enabled (implicit), `False` otherwise       |