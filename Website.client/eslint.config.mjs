// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from "globals";

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommended,
    tseslint.configs.strict,
    tseslint.configs.stylistic,
    {
        rules: {
            "@typescript-eslint/no-explicit-any": "error"
        },
        ignores: ["/dist"],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node
            }
        }
    }
);