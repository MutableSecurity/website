---
sidebar_position: 8
---

# Integrating a New Solution

## Steps

1. Create a new issue on GitHub. For all GitHub references in this guide, please consider looking in parallel to [Using Git and GitHub to Contribute](using-git-and-github-to-contribute.md).
2. Research the solution. The recommended questions to answer at this step are:
    - What is the purpose of this security solution in an organization's infrastructure?
    - What is the architecture of the solution? Does it consist of a tuple of agent and manager server?
    - What are the on-demand features that the solution exposes?
    - What tests can be implemented? Please consider the tests types listed in the index from [Module Architecture](module-architecture.md).
    - What are the solution configurable features?
    - What metrics does the solution expose?
    - Where does the solution generate its logs?
3. Validate your responses with another contributor.
4. Implement the module by considering the [principle](#implementation-principles).
5. Create a guide for testing the solution. Follow it along by yourself until the solution module behaves as expected.
6. Create commits and pull requests on GitHub, attaching the test guide as a comment in the latter.
7. Send the test guide to another contributor to validate the functioning.
8. If not validated, change the implementation by creating a separate commit for each change request. After, go to step 7.
9. If validated, Otherwise, merge the pull request from GitHub.

## Implementation Principles

### Operations and Facts Reusability

pyinfra's operations and facts are, in most cases, reusable. For example, it is redundant to define the same Ubuntu operating system check in different `code.py` files for different solutions.

This being said, the priority when dealing with operation or fact is:
1. Find an already implemented one in pyinfra's index. If there is no match, go to the next step.
2. Find an already implemented one in `mutablesecurity.solutions.common` package. If no match, go to the next step.
3. If the problem can be abstracted and reused in future by different solutions' integration, write one in the `mutablesecurity.solutions.common` package. If there is no module suitable for storing your operation or fact, create a new module.
4. Otherwise, write one in the `code.py` file of the solution you currently implement.

In case you write new automation code (cases 3 and 4), avoid using the `server.shell` operation. To execute the same command in two different deploys of the same solution module means copying the whole `server.shell` call, violating the Don't Repeat Yourself (DRY) principle. In addition, a mistake found in one occurrence affects all other occurrences. This being said, opt for the pyinfra's operations and the ones from `mutablesecurity.solutions.common` package.

### Recommended Classes Count

The amount of classes per type does not have an upper limit. The exception here is the number of solution classes, which is one per module. We recommend writing as many as you can as the integrated solution becomes more mature. In the table below, the minimum recommended count is shown:

| Type        | Recommended Number                                                  |
| ----------- | ------------------------------------------------------------------- |
| Action      | 0                                                                   |
| Test        | 4 (one of `REQUIREMENT`, `PRESENCE`, `OPERATIONAL`, and `SECURITY`) |
| Log         | 1                                                                   |
| Information | 0                                                                   |

### Useful Imports

Imports can be made from:
- `mutablesecurity.solutions.base`, for abstract classes that require to be overwritten in the current module
- `mutablesecurity.solutions.common.facts.*` and `mutablesecurity.solutions.common.operations.*` for reusable facts and operations, shared between solutions
- `pyinfra.facts.*` and `pyinfra.operations.*` for pyinfra facts and operations
- Other packages from PyPi, which are installed with `poetry install` and useful for your automation.