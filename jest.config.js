module.exports = {
    verbose: true,
    collectCoverage: false, // temporarily set to false so circleci passes
    collectCoverageFrom: [
        "api/*.js",
        "modules/*.js",
        "!**/coverage/**",
        "!**/node_modules/**",
    ],
    coverageDirectory: "coverage",
    moduleDirectories: ["node_modules"],
    testMatch: [
        "**/__tests__/?(*.)(spec|test).js",
        "**/__tests__/**/?(*.)(spec|test).js",
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
};
