---
sidebar_position: 9
---

# Releasing a New Version

1. Follow the first steps from [Using Git and GitHub to Contribute](using-git-and-github-to-contribute.md), where the issue is named "vX.Y.Z Version Release".
2. Increase the version number inside `pyproject.toml`.
3. Place the same version number inside the `VERSION` constant from `mutablesecurity/__init__.py`.
4. Update `CHANGELOG.md`.
5. Upload the new release to TestPyPi with the commands below, where `<testpypi_token>` is the TestPyPi token.

    ```
    poetry config repositories.test-pypi https://test.pypi.org/legacy/
    poetry config pypi-token.test-pypi <testpypi_token>
    poetry publish --build --dry-run --username mutablesecurity --repository test-pypi
    poetry publish --build --username mutablesecurity --repository test-pypi
    ```

6. Install MutableSecurity in a test environment by running `pip install --index-url https://test.pypi.org/simple/ --extra-index-url https://pypi.org/simple mutablesecurity`.
7. Test the functionalities introduced by the release.
8. Follow the steps 5-9 from [Using Git and GitHub to Contribute](using-git-and-github-to-contribute.md).
9. Once you ensure that all is properly functioning, upload to PyPi by using the command below, where `<pypi_token>` is the PyPi token.

    ```
    poetry config pypi-token.pypi <pypi_token>
    poetry publish --build --dry-run --username mutablesecurity
    poetry publish --build --username mutablesecurity
    ```

10. Update the PEX executable using the [guide](updating-pex-executable.md).
11. Update the Debian package using the [guide](updating-deb-package.md).
12. Create a new GitHub release by:
    - Creating a new tag in the format `vX.Y.Z`.
    - Setting the title to be the same as the created tag
    - Placing the version's CHANGELOG section in the description
    - Uploading the PEX executable (named `mutablesecutity`) and the Debian package (named `mutablesecurity.deb`).
13. Update the Debian repository using the [guide](updating-debian-repo.md)