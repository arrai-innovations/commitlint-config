// A body indented as a whole reads as a code block wherever Markdown renders a commit message,
// including GitHub's commit and pull request views. Every line carrying leading whitespace is the
// signature of that mistake: a list continuation, a wrapped line, or an indented code sample always
// leaves at least one line flush against the margin.
const bodyNoIndent = ({ body }) => {
    const lines = (body || "").split("\n").filter((line) => line.trim() !== "");
    if (lines.length === 0) {
        return [true];
    }
    return [
        lines.some((line) => !/^[ \t]/.test(line)),
        "body must not be indented as a whole; only continuations and code samples carry leading whitespace",
    ];
};

module.exports = {
    "extends": ["@commitlint/config-conventional"],
    "plugins": [{ rules: { "body-no-indent": bodyNoIndent } }],
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
        'body-no-indent': [2, 'always'],
    },
};
