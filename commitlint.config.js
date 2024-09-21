module.exports = {
    extends: ["@commitlint/config-conventional"],
    parserPreset: {
        parserOpts: {
            issuePrefixes: ["Issue: DeeJ-"],  // Custom issue prefix
        },
    },
    rules: {
        "scope-empty": [2, "never"],  // Scope must be provided
        "scope-enum": [
            2,
            "always",
            [
                "webapp",
                "shortlist",
                "infra",
                "viewing",
                "inventory",
                "location",
                "base",
                "env",
                "search",
                "account",
                "content",
                "test",
                "identity",
                "perf",
            ],
        ],  // Allowed scopes
        "references-empty": [2, "never"],  // References must be provided
    },
};
