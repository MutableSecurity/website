---
sidebar_position: 9
---

# Publishing a New Release

1. Follow the first steps from [Using Git and GitHub to Contribute](Using%20Git%20and%20GitHub%20to%20Contribute), where the issue is named "vX.Y.Z Version Release".
2. Increase the version number in `pyproject.toml`.
3. Update `CHANGELOG.md`.
4. Upload the new release to TestPyPi with the commands below, where `<testpypi_token>` is the TestPyPi token.

    ```
    poetry config repositories.test-pypi https://test.pypi.org/legacy/
    poetry config pypi-token.test-pypi <testpypi_token>
    poetry publish --build --dry-run --username mutablesecurity --repository testpypi
    poetry publish --build --username mutablesecurity --repository testpypi
    ```

5. Install MutableSecurity in a test environment by running `pip install --index-url https://test.pypi.org/simple/ --extra-index-url https://pypi.org/simple mutablesecurity`.
6. Test the functionalities introduced by the release.
7. Follow the steps 4-8 from [Using Git and GitHub to Contribute](Using%20Git%20and%20GitHub%20to%20Contribute).
8. Once you ensure that all is properly functioning, upload to PyPi by using the command below, where `<pypi_token>` is the PyPi token.

    ```
    poetry config pypi-token.pypi <pypi_token>
    poetry publish --build --dry-run --username mutablesecurity
    poetry publish --build --username mutablesecurity
    ```