---
sidebar_position: 3
---

# Project Structure

From a development point of view (landing page not included), the project resides on multiple platforms:
- **GitHub** for:
    - Code versioning for:
        - Python 3 codebase
        - Configuration files for IDEs, linters, and formatters
        - Configuration files for services (for example, DeepSource via `.deepsource.toml`)
    - Issues tracking
    - Workflows for:
        - Running unit tests and posting coverage information to Coveralls, but only after each commit or pull request on `main` branch
        - Performing various automatic update actions (for example, for updating the solutions' table in `README.md`)
- **PyPi** for:
    - Hosting our Python 3 package, `mutablesecurity`
    - Hosting the dependencies that our codebase uses
- **DeepSource** for statically scanning the Python codebase for vulnerabilities, style and documentation inconsistencies
- **Snyk** for vulnerability and dependency scanning
- **Coveralls** for storing coverage information
- **Dependabot** for automatically updating (process named bumping) Python dependencies
- **Cloudflare** for:
    - Hosting the website
    - Hosting the Debian archive

In terms of production dependencies, the most used packages are:
- **pyinfra** for connecting to hosts and executing commands
- **Click** and **Rich**, for creating our beautiful command line interface.