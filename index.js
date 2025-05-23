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
        ],
        // Raise to error severity
        'body-leading-blank': [2, 'always'],
        'footer-leading-blank': [2, 'always'],
    },
};

