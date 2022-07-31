---
sidebar_position: 2
---

# Development Environment

The development environment consists in:
- **VSCodium** as an IDE, with extensions:
    - **autoDocstring** for automatically generating docstrings
    - **Better TOML** for TOML language support
    - **Error Lens** for highlighting linters errors
    - **Markdown All in One**, **Markdown Preview Enhanced** and **Markdown Preview GitHub Styling** for improved editing and viewing of Markdown documents
    - **Python** for Python support (including IntelliSense)
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
- **Git** for version controlling.

All the linters and formatters mentioned above are configured via `pyproject.toml` and automated via `.vscode/settings.json`.