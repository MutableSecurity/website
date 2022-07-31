---
sidebar_position: 7
---

# Publishing a New Package Version

1. Increase the version number in the TOML file.
2. Update `CHANGELOG.md`.
3. Upload the new release to TestPyPi with the commands below, where `<testpypi_token>` is the TestPyPi token.

    ```
    poetry config repositories.test-pypi https://test.pypi.org/legacy/
    poetry config pypi-token.test-pypi <testpypi_token>
    poetry publish --build --dry-run --username mutablesecurity --repository testpypi
    poetry publish --build --username mutablesecurity --repository testpypi
    ```

4. Install MutableSecurity in a test environment by running `pip install --index-url https://test.pypi.org/simple/ --extra-index-url https://pypi.org/simple mutablesecurity`.
5. Test the functionalities introduced by the release.
6. Once you ensure that all is properly functioning, upload to PyPi by using the command below, where `<pypi_token>` is the PyPi token.

    ```
    poetry config pypi-token.pypi <pypi_token>
    poetry publish --build --dry-run --username mutablesecurity
    poetry publish --build --username mutablesecurity
    ```