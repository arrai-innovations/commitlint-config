# Changelog

This project adheres to [semantic versioning](https://semver.org).

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

