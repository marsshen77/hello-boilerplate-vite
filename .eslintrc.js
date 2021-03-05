module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['airbnb', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['import', 'react', '@typescript-eslint'],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
            typescript: {},
            node: {
                // 指定 eslint-plugin-import 解析的后缀名
                extensions: ['.ts', '.tsx', '.js', '.json']
            }
        }
    },
    rules: {
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'no-use-before-define': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
                json: 'never',
                js: 'never'
            }
        ]
    }
};
