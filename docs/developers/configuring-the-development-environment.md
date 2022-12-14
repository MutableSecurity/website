---
sidebar_position: 6
---

# Configuring the Development Environment

1. Install the [main requirements](users/installing-the-package.md) of the project.
2. Install Poetry by following the [official installation guide](https://github.com/python-poetry/poetry#installation).
3. Set Poetry to install the environments in the projects folders.

    ```
    poetry config virtualenvs.in-project true
    ```

4. Download the required Python packages:

    ```
    poetry install
    ```

5. Enter the environment:

    ```
    poetry shell
    ```

6. See the tool's banner and guide:

    ```
    mutablesecurity
    ```

7. Configure the commit template by running:

    ```
    git config commit.template .github/COMMIT_TEMPLATE
    ```

8. Open the project's folder in VSCodium.
9.  Install the recommended extension when the popup appears. If it is not the case, run the command "Extensions: Show Recommended Extensions" to achieve the same.
10. Create a `.mutablesecurity` file in repository's folder with the content below.

    ```yaml
    developer_mode: True
    ```