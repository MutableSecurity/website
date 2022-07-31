---
sidebar_position: 5
---

# Using Git and GitHub to Contribute

1. Open an issue, take over one you are assigned to, or assign yourself to one that hasn't been processed yet.
2. Create a branch named `issue-<issue_numer>`, where `<issue_numer>` is the identifier of the issue.
3. Fix a bug or implements a new feature. In the second scenarios, implement new unit tests for validating the changes. These can be locally run with `poetry run pytest -s`.
4. Commit the changed files by respecting the commit format.
5. Create a pull request from your branch to `main` by respecting the corresponding format.
6. Ask another contributor to review and test the changes.
7. If the unit tests pass and the other contributor approved the change, then merge the pull request by rebase.
8. Delete the old branch.