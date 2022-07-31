---
sidebar_position: 6
---

# Integrating a New Solution

## Steps

1. Create a new issue on GitHub. For all GitHub references in this workflow, please consider looking in parallel to [Using Git and GitHub to Contribute](Using%20Git%20and%20GitHub%20to%20Contribute.md).
2. Research the solution. The recommended questions to answer at this step are:
    - What is the purpose of this security solution in an organization's infrastructure?
    - What is the architecture of the solution? Does it consist of a tuple of agent and manager server?
    - What are the on-demand features that the solution exposes?
    - What tests can be implemented? Please consider the tests types listed in the index from [Module Architecture](Module%20Architecture.md).
    - What are the solution configurable features?
    - What metrics does the solution expose?
    - Where does the solution generate its logs?
3. Validate your responses with another contributor.
4. Implement the module by considering the [principle](#implementation-principles).
5. Create a guide for testing the solution. Follow it along by yourself until the solution module behave as expected.
6. Create commits and pull requests on GitHub, attaching the test guide as a comment in the latter.
7. Send the test guide to another contributor to validate the functioning.
8. If not validated, change the implementation and go to step 7. Otherwise, merge the pull request from GitHub.

## Implementation Principles

### Operations and Facts Reusability

pyinfra's operations and facts are, in the most cases, reusable. For example, it is redundant to define the same Ubuntu operating system check in different `code.py` files for different solutions.

This being said, the priority when dealing with operation or fact is:
1. Find an already implemented one in pyinfra's index. If no match, go to the next step.
2. Find an already implemented one in `mutablesecurity.solutions.common` module. If no match, go to the next step.
3. If the problem can be abstracted and reused in future by different solutions' integration, write one in the `mutablesecurity.solutions.common` module. Otherwise, go to the next step.
4. Write one in the `code.py` file of the solution you currently implement.

In the case you write new automation code (cases 3 and 4), avoid using the `server.shell` operation. To execute the same command in two different deploys of the same solution module means copying the whole `server.shell` module, violating the Don't Repeat Yourself (DRY) principle. In addition, a mistake found in one occurrence affects all the other occurrence. This being said, prefer the pyinfra's operations and the ones from `mutablesecurity.solutions.common` module.

### Recommended Classes Count

The recommended classes number per type does not have an upper limit. The exception here is the number of solution classes, which is one per module. We recommend writing as many as you can as the integrated solution became more mature. In the table above, the minimum recommended count is shown:

| Type        | Recommended Number                                                  |
|-------------|---------------------------------------------------------------------|
| Action      | 0                                                                   |
| Test        | 4 (one of `REQUIREMENT`, `PRESENCE`, `OPERATIONAL`, and `SECURITY`) |
| Log         | 1                                                                   |
| Information | 0                                                                   |

### Useful Imports

Imports can be made from:
- `mutablesecurity.solutions.base`, for abstract classes that require to be overwritten in the current module
- `mutablesecurity.solutions.common.facts.*` and `mutablesecurity.solutions.common.operations.*` for reusable facts and operations, shared between solutions
- `pyinfra.facts.*` and `pyinfra.operations.*` for pyinfra facts and operation
- Another modules from PyPi, which are installed with `poetry install` and useful for your automation.