---
sidebar_position: 4
---

# Development Environment

## Components

- **VSCodium** as an IDE, with:
    - Automated formatting and linting
    - Extensions
        - **autoDocstring** for automatically generating docstrings
        - **Better TOML** for TOML language support
        - **Error Lens** for highlighting linters errors
        - **Markdown All in One**, **Markdown Preview Enhanced** and **Markdown Preview GitHub Styling** for improved editing and viewing of Markdown documents
        - **Python** for Python support (including IntelliSense)
    - Hidden files from tree
    - Ruler
- **pylint** for linting
- **flake8** for linting and accompanied by multiple plugins:
    - **darglint** and **flake8-docstrings** for consistency in docstrings
    - **flake8-annotations** for type annotation enforcement
    - **flake8-bandit** for security-related issues
    - **flake8-print** for reporting any use of the built-in function `print`
    - **flake8-quotes** for quotes linting
    - **flake8-spellcheck** for reporting unknown words (by comparing with a default dictionary and `whitelist.txt` from repository's root)
    - **flake8-tidy-imports** for imports linting
- **MyPy** for type checking
- **Black** for automated code formatting
- **isort** for automated import sorting
- **pytest** for executing unit tests
- **coverage.py** for generating coverage information based on pytest's execution
- **Poe** for task running
- **Git** for version controlling
- **ELF2deb** for creating the skeleton of the Debian package
- **Freight** for managing a Debian repository using a collection of an Shell scripts
- **Docker** for creating isolated environment for:
    - Updating the Debian repository

## Automations

### VSCodium

All the linters and formatters mentioned above are configured via `pyproject.toml` and automated via `.vscode/settings.json`.

### Poe

Configured in `pyproject.toml`, Poe exposes multiple tasks that can be run with `poe <task>`.

The most important tasks are:
- `lint_<linter>`: Run the linter `<linter>`.
- `lint`: Run all linters
- `covtest`: Run the unit tests and report the coverage.
- `generate_<asset>`: Generate the asset `<asset>` of the repository. These commands are already run automatically with GitHub workflows.

Poe does not automate the formatters too. These are already run when saving a file in VSCodium.