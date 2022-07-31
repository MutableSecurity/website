---
sidebar_position: 3
---

# Module Architecture

As described in the general guide, each cybersecurity solution integrated in MutableSecurity is represented by a module. Each module has a corresponding folder in `mutablesecurity/solutions/implementations`, named with the solution identifier.

## Folder Structure

The module gather files related to the solution:
1. **`files`** is a folder containing useful files, that are uploaded to the target host. A frequent use case is when we have a YAML configuration. The concrete values can be replaced with Jinja placeholders and then used to generate custom, system-specific configuration files based on user's data.
2. **`code.py`** is a Python source file containing the effective automation code that is described in the "*Automation Logic*" section of the [Cybersecurity Solutions](../guide-starter/Cybersecurity%20Solutions.md) chapter in the general guide. We will discuss more about this later.
3. **`logo.png`** is a PNG image representing the solution logo. It has a transparent background. Its size is arbitrary as long as its height is greater than 200 pixels.
4. **`meta.yaml`** is a YAML file containing static details about the solutions. These were described in the "*Other Details*" section of the [Cybersecurity Solutions](../guide-starter/Cybersecurity%20Solutions.md) chapter in the general guide. We will detail on this topic in the next section.

## `meta.yaml`

The standard structure of `meta.yaml` is:

```yaml
full_name: <solution>
description: <description>
references:
  - <reference>
maturity: <maturity_level>
categories:
  - <category>
```

Based on the general guide, the first 3 keys are self-explanatory. For the last two, the values needs to be from a specific set, detailed in the [maturity levels](../guide-starter/Indexes.md#maturity-levels) and [solutions categories](../guide-starter/Indexes.md#solutions-categories) indexes.

## `code.py`

### File Structure

The standard structure of this Python file is the following:

```python
"""Module integrating <solution>."""

# pylint: disable=missing-class-docstring
# pylint: disable=unused-argument
# pylint: disable=unexpected-keyword-arg

# Actions classes definitions

# Tests classes definitions

# Logs classes definitions

# Information classes definitions

# Solution class definition
```

After providing a module docstring, some pylint warnings are ignored. This ease the integration of new solutions without requiring abundant documentation).

Then the classes for actions, information, logs, and tests are defined, followed by the solution class aggregating all the other classes. These will be described in the following sections without examples, but you can explore the implementation of the solution `dummy` to see effective Python code.

### Actions

Inherits `BaseAction` from `mutablesecurity.solutions.base`.

#### Methods and Members

- **pyinfra deploy**: Defined as a static method, takes parameters that need to be passed by users when executing this action.
- **Member `IDENTIFIER`**: Alpha string, lowercased and with underscore as the single special character accepted (used instead of spaces)
- **Member `DESCRIPTION`**: Grammatically-correct phrase describing the behavior of the action
- **Member `ACT`**: Reference to the above-mentioned pyinfra deploy

### Information

Inherits `BaseInformation` from `mutablesecurity.solutions.base`.

#### Methods and Members

- **pyinfra fact**: Defined as a class, returns the value of the information as in the remove host
- **pyinfra deploy**: Defined as a static method, takes two parameters for the old information value and the new one. Its purpose is to set on the remote host the new value. Only if required by the information nature.
- **Member `IDENTIFIER`**: Alpha string, lowercased and with underscore as the single special character accepted (used instead of spaces)
- **Member `DESCRIPTION`**: Grammatically-correct description of the information
- **Member `INFO_TYPE`**: Information type, one of the `DataType` suffixed classes exposed by `mutablesecurity.solutions.base`. Their names are self-explanatory. In addition, classes for single enumerations or lists of enumerations can be defined by inheriting from the `DataType` class as exemplified above:

    ```python
    class State(Enum):
        ENABLED = "enabled"
        DISABLED = "disabled"

    class StateDataType(DataType):
        ALIAS = "STATE"
        INNER_TYPE = InnerDataType.ENUM
        BASE_ENUM = State
        PYTHON_ANNOTATION = Enum
    ```

- **Member `PROPERTIES`**: List of information properties, with possible values from [Information Properties](../guide-starter/Indexes.md#information-properties) index 
- **Member `DEFAULT_VALUE`**: Default value of the fact, only if the `WITH_DEFAULT_VALUE` information property is present
- **Member `GETTER`**: Reference to the above-mentioned pyinfra fact
- **Member `SETTER`**: Reference to the above-mentioned pyinfra deploy. Only if required by the information nature.

### Logs

Inherits `BaseLog` from `mutablesecurity.solutions.base`.

#### Methods and Members

- **pyinfra fact**: Defined as a class, returns a string.
- **Member `IDENTIFIER`**: Alpha string, lowercased and with underscore as the single special character accepted (used instead of spaces)
- **Member `DESCRIPTION`**: Grammatically-correct phrase describing the log source content
- **Member `FACT`**: Reference to the above-mentioned pyinfra fact

### Tests

Inherits `BaseTest` from `mutablesecurity.solutions.base`.

#### Methods and Members

- **pyinfra fact**: Defined as a class, returns a boolean indicating if the test passed.
- **Member `IDENTIFIER`**: Alpha string, lowercased and with underscore as the single special character accepted (used instead of spaces)
- **Member `DESCRIPTION`**: Grammatically-correct phrase describing what the test checks
- **Member `TEST_TYPE`**: Test type, one of the value from the [Test Types](../guide-starter/Indexes.md#test-types) index
- **Member `FACT`**: Reference to the above-mentioned pyinfra fact

### Solution

Inherits `BaseSolution` from `mutablesecurity.solutions.base`.

#### Methods and Members

- **Member `ACTIONS`**: Array of actions defined in the current source file
- **Member `INFORMATION`**: Array of information defined in the current source file
- **Member `LOGS`**: Array of logs defined in the current source file
- **Member `TEST`**: Array of tests defined in the current source file
- **Method `_install`**: pyinfra deployment as a static method. Installs the solution.
- **Method `_uninstall`**: pyinfra deployment as a static method. Uninstalls the solution.
- **Method `_update`**: pyinfra deployment as a static method. Updates the solution.