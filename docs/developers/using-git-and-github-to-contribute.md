---
sidebar_position: 7
---

# Using Git and GitHub to Contribute

1. Open an issue, take over one you are assigned to, or assign yourself to one that hasn't been processed yet.
2. Create a branch named `issue-<issue_numer>`, where `<issue_numer>` is the identifier of the issue.
3. Fix a bug or implement a new feature. In the second scenario, implement new unit tests for validating the changes. These can be locally run with `poe covtest`. The coverage needs to remain above 90% and should decrease with maximum 1% comparative to the last commit.
4. Check if the files are formatted correctly with `poe lint`.
5. Commit the changed files by respecting the commit format.
6. Create a pull request from your branch to `main` by respecting the corresponding format.
7. Ask another contributor to review and test the changes.
8. If the unit tests pass and the other contributor approved the changes, then merge the pull request by rebase.
9. Delete the old branch.