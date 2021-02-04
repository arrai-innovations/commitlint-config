# commitlint-config

Arrai Innovation's shareable configuration for [commitlint](https://commitlint.js.org).

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

## Use with husky

1. Install husky: https://typicode.github.io/husky/

1. Install commitlint/cli: https://www.npmjs.com/package/@commitlint/cli

   ```console
   $ npm install --save-dev @commitlint/cli
   ```

1. Create a `.husky/commit-msg` file to run commitlint:

   ```bash
   #!/usr/bin/env bash
   npx --no-install commitlint --edit $1
   ```

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

1. Install lint-staged: https://github.com/okonet/lint-staged#installation-and-setup

