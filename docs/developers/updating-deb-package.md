---
sidebar_position: 11
---

# Updating the Debian Package

1. Set `pex-to-deb/mutablesecurity` as working directory.
2. Add to `debian/changelog`, in the specific CHANGELOG format, a new entry describing the changes you introduce.
3. Create the package: `debuild -us -uc -Zgzip`.

**Observation**: The initial folder structure was created using [ELF2deb](https://github.com/NicolaiSoeborg/ELF2deb): `elf2deb --package_name mutablesecurity --package_version <package_verion> --homepage mutablesecurity.io --dependencies python3 --license MIT --license_year 2022 --license_holder MutableSecurity ../pex-packing/mutablesecurity`