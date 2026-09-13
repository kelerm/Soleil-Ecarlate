/** @type {import("prettier").Config} */
const config = {
    useTabs: false,
    tabWidth: 4,
    singleQuote: true,
    trailingComma: 'all',
    semi: true,
    printWidth: 110,
    overrides: [
        {
            files: '*.scss',
            tabWidth: 2,
        },
    ],
};

export default config;
