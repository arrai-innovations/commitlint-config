# commitlint-config

Arrai Innovation's shareable configuration for [commitlint](https://commitlint.js.org).

- [Requirements](#requirements)
- [Use with pre-commit](#use-with-pre-commit)
- [Use with Husky](#use-with-husky)
- [Publishing](#publishing)

## Requirements

- Node.js 22.12.0 or newer, the floor set by `@commitlint/config-conventional` 21.
- commitlint 21 (`@commitlint/cli@^21`). Commitlint 19 and 20 also load this configuration, but both depend on the
  deprecated `git-raw-commits` package.

## Use with pre-commit

1. Install pre-commit: https://pre-commit.com

1. Install the `commit-msg` hook type:

   ```console
   $ pre-commit install --hook-type commit-msg
   pre-commit installed at .git/hooks/commit-msg
   ```

1. Create a `.pre-commit-config.yaml` file at the root of your repo:

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

1. Add a `.commitlintrc.json` or other commitlint configuration file (see [Install commitlint](https://commitlint.js.org/#/guides-local-setup?id=install-commitlint)) to the root of your repo:

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

1. Create a `.husky/commit-msg` file at the root of your repo to run commitlint:

   ```bash
   #!/usr/bin/env bash
   npx --no-install commitlint --edit "$1"
   ```
   
   Husky changed formats in version 5. Version 4 Husky used to have it's hooks configured in `package.json`.

1. Add scripts to `package.json` to install Husky hooks when a user runs `npm install` while developing our package:

   ```console
   $ npm install --save-dev is-ci pinst
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

1. Add a `.commitlintrc.json` or other commitlint configuration file (see [Install commitlint](https://commitlint.js.org/#/guides-local-setup?id=install-commitlint)) to the root of your repo:

   ```json
   {
       "extends": ["@arrai-innovations/commitlint-config"]
   }
   ```

## Publishing

For maintainers. This package is published to the public npm registry by hand; the repository has no CI.

1. Add the release to `CHANGELOG.md`, set the new `version` in `package.json`, and run `npm install` so
   `package-lock.json` records the same version.

1. Commit, tag, and push. `pnpm publish` checks that the branch is clean and up to date with its remote, so push before
   publishing:

   ```console
   $ git tag -a 3.0.0 -m "3.0.0"
   $ git push origin main
   $ git push origin refs/tags/3.0.0
   ```

1. Confirm both the contents and the destination:

   ```console
   $ pnpm publish --dry-run
   📦 @arrai-innovations/commitlint-config@3.0.0 → https://registry.npmjs.org/
   ```

   The registry on that line must read `registry.npmjs.org`. If it reads anything else, stop and see below.

1. Publish:

   ```console
   $ pnpm publish
   ```

   Pass `--otp=<code>` if npm asks for a one-time password. `--access public` is unnecessary, since
   `publishConfig.access` already sets it.

### Why `publishConfig.registry` is in `package.json`

Developer `~/.npmrc` files map the whole `@arrai-innovations` scope to Arrai's internal registry, which is correct for
installing private packages but wrong for publishing this public one. The `registry` entry under `publishConfig`
redirects publishing back to the public registry, and it applies only to publishing. Leave it in place. Without it,
`pnpm publish` targets the internal registry and stops with a `403 Forbidden`.

To override the scope for a single command instead, without editing your `~/.npmrc`:

```console
$ pnpm publish --@arrai-innovations:registry=https://registry.npmjs.org/
```

A registry line naming one package, such as `@arrai-innovations/commitlint-config:registry=...`, has no effect. npm and
pnpm resolve registry mappings per scope only.

