---
sidebar_position: 4
---

# Selecting the Deployment Method

## `mutablesecurity --remote <username>@<hostname>:<port>`

- Remote deployment to a single target host
- The host is identified by the hostname or IP address `<hostname>`.
- The SSH connection is created with the username `<username>` and port `<port>`.

## `mutablesecurity --remote-list <list_filename>`

- Remote deployment to multiple target hosts
- Each line in the file name `<list_filename>` respects the `<username>@<hostname>:<port>` format, as in the [single-host deployment](#mutablesecurity---remote-usernamehostnameport).

## Without Any Special Argument

- Local deployment