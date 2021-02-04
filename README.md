# commitlint-config

Arrai Innovation's shareable configuration for [commitlint](https://commitlint.js.org).

- [Use with pre-commit](#use-with-pre-commit)
- [Use with Husky](#use-with-husky)

## Use with pre-commit

1. Install pre-commit: https://pre-commit.com

1. Install the `commit-msg` hook type:

   ```console
   $ pre-commit install --hook-type commit-msg
   pre-commit installed at .git/hooks/commit-msg
   ```

1. Create a `.pre-commit-config.yaml` file:

   ```yaml
   default_stages: [commit]
   fail_fast: true
   
   repos:
       - repo: https://github.com/alessandrojcm/commitlint-pre-commit-hook
         rev: v4.1.0
         hooks:
           - id: commitlint
             stages: [ commit-msg ]
             additional_dependencies: [ "@arrai-innovations/commitlint-config" ]
   ```

   It contains a pre-commit hook for commitlint using [commitlint-pre-commit-hook](https://github.com/alessandrojcm/commitlint-pre-commit-hook) with this repo's configuration as a dependency.

1. Add a `.commitlintrc.json` or other commitlint configuration file (see [Install commitlint](https://commitlint.js.org/#/guides-local-setup?id=install-commitlint)):

   ```json
   {
       "extends": ["@arrai-innovations/commitlint-config"]
   }
   ```

## Use with Husky

1. Install Husky: https://typicode.github.io/husky/

   ```console
   $ npm install --save-dev "husky@^5"
   ```

1. Install commitlint/cli: https://www.npmjs.com/package/@commitlint/cli

   ```console
   $ npm install --save-dev @commitlint/cli
   ```

1. Create a `.husky/commit-msg` file to run commitlint:

   ```bash
   #!/usr/bin/env bash
   npx --no-install commitlint --edit $1
   ```
   
   Husky changed formats in version 5. Version 4 Husky used to have it's hooks configured in `package.json`.

1. Add scripts to `package.json` to install Husky hooks when a user runs `npm install` while developing our package:

   ```console
   $ npm install --save-dev is-cli pinst
   ```

   ```json
   {
      ...
      "scripts": {
         ...,
         "postinstall": "is-ci || husky install",
         "prepublishOnly": "pinst --disable",
         "postpublish": "pinst --enable"
      },
      ...
   }
   ```
   
   The `is-ci` module helps us not install hooks uselessly on ci builds. The `pisnt` module helps us not install hooks when users install this package as a dependency.

1. Install this repo's configuration:

   ```console
   $ npm install --save-dev @arrai-innovations/commitlint-config
   ```

1. Add a `.commitlintrc.json` or other commitlint configuration file (see [Install commitlint](https://commitlint.js.org/#/guides-local-setup?id=install-commitlint)):

   ```json
   {
       "extends": ["@arrai-innovations/commitlint-config"]
   }
   ```

