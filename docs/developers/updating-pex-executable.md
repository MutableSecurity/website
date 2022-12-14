---
sidebar_position: 10
---

# Updating the PEX Executable

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

3. Copy the source files. This will avoid including irrelevant files into the executable.

  ```bash
  cp <path_to_main_repo>/mutablesecurity sources
  ```

4. Generate a new executable:

  ```bash
  <path_to_main_repo>/.venv/bin/pex \
    --python "python3.9" \
    --python-shebang "/usr/bin/env python3" \
    --sources-directory sources \
    --requirement requirements.txt \
    --exe sources/mutablesecurity/cli/cli.py \
    --output-file mutablesecurity \
    --disable-cache --emit-warning
  ```