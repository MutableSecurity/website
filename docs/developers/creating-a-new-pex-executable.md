---
sidebar_position: 10
---

# Creating a new PEX Executable

1. In the `packaging` repository, set `pex-packing` as working directory.
2. Generate the updated version of `requirements.txt`:

  ```bash
  cd <path_to_main_repo> && \
    poetry export \
      --format requirements.txt \
      --output $OLDPWD/requirements.txt \
      --without-hashes && \
    cd -
  ```

3. Generate a new executable:

  ```bash
  <path_to_main_repo>/.venv/bin/pex \
    --sources-directory <path_to_main_repo> \
    --requirement requirements.txt \
    --exe <path_to_main_repo>/mutablesecurity/cli/cli.py \
    --output-file mutablesecurity \
    --disable-cache --emit-warning
  ```