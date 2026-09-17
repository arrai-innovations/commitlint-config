# Changelog

This project adheres to [semantic versioning](https://semver.org).

## 3.1.0

*2026-09-17*

### Added

* `body-no-indent`, an error-severity rule rejecting a commit body whose every line carries leading whitespace. A body
  indented as a whole renders as a code block wherever Markdown displays a commit message, including GitHub's commit and
  pull request views. A list continuation, a wrapped line, or an indented code sample always leaves at least one line
  flush against the margin, so those stay legal.
* A `plugins` entry, which carries the rule's implementation. Commitlint merges it through `extends`, so a consumer
  needs no change beyond the version bump.

## 3.0.0

*2026-08-05*

### ⚠️ Breaking

* Node.js 22.12.0 or newer is now required, declared in a new `engines` field. `@commitlint/config-conventional` 21 sets
  that floor and package managers enforce it on install.
* Upgraded `@commitlint/config-conventional` from 19 to 21. Use this release with `@commitlint/cli` 21. Both commitlint
  19 and 20 pull in `git-raw-commits`, which is deprecated in favour of `@conventional-changelog/git-client`.

### Changed

* No rule changes. The inherited rule set is identical between `@commitlint/config-conventional` 19.8.1 and 21.2.0, so
  the custom commit types and the error-severity blank-line rules behave as they did before.

## 2.0.0

*2025-03-14*

### ⚠️ Breaking

* **refactor!**: switched to extending `@commitlint/config-conventional` instead of defining full rules manually.  
  This ensures alignment with community standards while preserving custom commit types.

### Added

* Dependency on `@commitlint/config-conventional`.
* `.idea` added to `.gitignore` for JetBrains IDEs.

### Removed

* Explicit commitlint rule definitions that are now inherited from `@commitlint/config-conventional`.

## 1.1.0

*2021-03-03*

### Added

* `remove` commit type.

## 1.0.0

*2021-02-01*

Initial release.

