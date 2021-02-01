module.exports = {
    rules: {
        "body-leading-blank": [1, "always"],
        "footer-leading-blank": [1, "always"],
        "scope-case": [2, "always", "lower-case"],
        "subject-empty": [2, "never"],
        "type-case": [2, "always", "lower-case"],
        "type-empty": [2, "never"],
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
                "revert",
                "style",
                "test",
                "wip",
            ],
        ],
    },
};

