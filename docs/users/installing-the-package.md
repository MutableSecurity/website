---
sidebar_position: 4
---

# Installing the Package

## Via Debian Repository

```bash
# 1. Add the GPG keyring
wget -O- https://debian.mutablesecurity.io/pubkey.gpg | \
    gpg --dearmor | \
    sudo tee /usr/share/keyrings/mutablesecurity.gpg > /dev/null

# 2. Add the Debian repository
echo "deb [signed-by=/usr/share/keyrings/mutablesecurity.gpg] https://debian.mutablesecurity.io bullseye main" |\
    sudo tee /etc/apt/sources.list.d/mutablesecurity.list

# 3. Fetch the details by apt-updating
sudo apt update

# 4. Install the package
sudo apt install mutablesecurity
```

## Via PyPi

Just run `pip install mutablesecurity`. Ensure that `/home/<username>/.local/bin` is added into your `$PATH` variable.

## Debian Package

From the [Releases section in main repository](https://github.com/MutableSecurity/mutablesecurity/releases), download the latest Debian package. After that, install it using `dpkg -i mutablesecurity.deb`.

## Executable

In the same [Releases](https://github.com/MutableSecurity/mutablesecurity/releases) section, you can find executables that wrap up the whole project. Only download the latest version and place it into a convenient location (for example, `/usr/bin` or `/home/<username>/.local/bin`).