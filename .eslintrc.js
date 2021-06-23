module.exports = {
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: false,
        },
    },
    rules: {
        semi: 'error',
        quotes: [
            2,
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ],
        indent: ['error', 4, { SwitchCase: 1 }],
        'max-len': ['error', { code: 80, ignoreComments: true }],
        'linebreak-style': 0,
        'keyword-spacing': ['error', { before: true, after: true }],
    },
    env: {
        browser: false,
        node: true,
    },
};
