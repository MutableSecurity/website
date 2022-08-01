---
sidebar_position: 3
---

# Orchestration Architecture

**Target hosts** are the computers where the deployment or management actions will take place.

At the moment, two **deployment styles** are used to interact with target hosts:
- **Local deployment**: The actions are carried out on the same host from which MutableSecurity was downloaded and executed.
- **Remote deployment**: MutableSecurity securely connects to a single remote host or a list of remote hosts with whom it can communicate over the network. The computer hosting MutableSecurity is referred to as the **orchestration host** in this scenario. Password-based or key-based SSH authentication is used.