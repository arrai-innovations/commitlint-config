module.exports = {
    "extends": ["@commitlint/config-conventional"],
    "rules": {
        "type-enum": [
            2,
            "always",
            [
                "build",
                "ci",
                "chore",
                "content",
                "docs",
                "feat",
                "fix",
                "perf",
                "refactor",
                "remove",
                "revert",
                "style",
                "test",
                "wip"
            ]
        ]
    }
};

