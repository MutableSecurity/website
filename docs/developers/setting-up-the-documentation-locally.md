---
sidebar_position: 12
---

# Setting Up the Documentation Locally

1. Install [Node Version Manager](https://github.com/nvm-sh/nvm#installing-and-updating).
2. Download a version greater than or equal to `16.16.0`:

    ```
    nvm install 16.16.0
    nvm use 16.16.0
    ```

3. Install all dependencies inside the website directory:
   
   ```
    npm install
    ```

4. Start the development server:

    ```
    npx docusaurus start
    ```