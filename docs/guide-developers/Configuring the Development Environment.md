---
sidebar_position: 4
---

# Configuring the Development Environment

1. Install the [main requirements](README.md#requirements-) of the project.
2. Install Poetry by following the [official installation guide](https://github.com/python-poetry/poetry#installation).
3. Run `poetry install` to download the required Python packages.
4. Run `poetry shell` to enter the environment. By running `mutablesecurity`, you will be able to see the tool's banner and guide.
5. Configure the commit template by running `git config commit.template .github/COMMIT_TEMPLATE`.
6. Open the project's folder in VSCodium.
7. Install the recommended extension when the popup appears. If it is not the case, run the command "Extensions: Show Recommended Extensions" to achieve the same.
8. Create a `.mutablesecurity` file in repository's folder with the content above.

    ```yaml
    developer_mode: True
    ```