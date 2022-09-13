---
sidebar_position: 8
---

# Application Monitoring

We at MutableSecurity want the software we write to be useful for the open source community. To achieve this, two aspects are mandatory:
1. Understanding how the application is used, such that our efforts could be concentrated in the functionalities and modules mostly used; and
2. Rapidly fixing issues and bugs encountered by our users.

## Monitoring Architecture

We established active communication channels (templates for GitHub issues, contact forms and an email address) and passive feedback streams, in the form of non-intrusive application monitoring:
- Usage monitoring with handcrafted data collection and storage; and
- Crash reporting with Sentry.

If you want to see the code implementing them, you can check the `monitoring` module [here](https://github.com/MutableSecurity/mutablesecurity/tree/main/mutablesecurity/monitoring).

## Collected Data

The data that is reported with the usage monitoring module is composed of:
- Managed security solution
- Operation
- A boolean indicating if you are a developer
- The operating system
- Version of Python interpreter
- Version of MutableSecurity
- Timezone.

![Stored data](/images/docs/application-monitoring/firebase.png)

In addition, for each crash, Sentry reports:
- Stack trace
- Used command
- Version of Python interpreter.

![Sentry stacktrace](/images/docs/application-monitoring/sentry-stacktrace.png)

![Sentry details about runtime](/images/docs/application-monitoring/sentry-runtime.png)

## Opting Out

If you considered that the data collection approach described above is too intrusive, you can disable the application monitoring in MutableSecurity by creating a `.mutablesecurity` file in the working directory, with the content below:

```yaml
application_monitoring: False
```

For any thoughts related to this aspect (for example, if you consider we could achieve this in a better way), please write us a line at `hello@mutablesecurity.io`.