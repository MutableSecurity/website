---
sidebar_position: 11
---

# Updating the Debian Repository

1. In the `packaging` repository, set `debian-repo` as working directory.
2. Build the image: `docker build -t freight .`
3. Ensure having the files and folders below:
    - `./gpg.key`, the GPG private key 
    - `./gpg.pass`, the password of the GPG private key
    - `./packages`, a folder with Debian packages that you want to add into the 
4. Add the packages into the repository (initially set with `freight-init --gpg=hello@mutablesecurity.io repository`):

    ```bash
    docker run \
        --name freight \
        --volume $(pwd)/gpg.pass:/root/gpg.pass:ro \
        --volume $(pwd)/gpg.key:/root/gpg.key:ro \
        --volume $(pwd)/packages:/root/packages \
        --volume $(pwd)/repository:/repository \
        freight
    ```

5. Remove the container: `docker container rm -f freight`
6. Commit and push the changes.