# commitlint-config

Arrai Innovation's shareable configuration for [commitlint](https://commitlint.js.org).

To use in a project:

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

