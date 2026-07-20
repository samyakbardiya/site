import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import eslintPluginAstro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";
import { defineConfig } from "eslint/config";
import ts from "typescript-eslint";

/**
 * @type {import('eslint').Linter.Config}
 */
export default defineConfig(
    {
        name: "ignores",
        ignores: ["dist/", ".astro/", "node_modules/", "nub.lock", "*.min.js"],
    },

    {
        name: "js/recommended",
        files: ["**/*.{js,mjs,cjs}"],
        extends: [js.configs.recommended],
    },

    {
        name: "ts/recommended",
        files: ["**/*.{ts,tsx,mts,cts}"],
        extends: [
            js.configs.recommended,
            ts.configs.recommended,
            ts.configs.recommendedTypeChecked,
        ],
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },

    {
        name: "astro/recommended",
        files: ["**/*.astro"],
        extends: [...eslintPluginAstro.configs.recommended, jsxA11y.flatConfigs.recommended],
    },

    {
        name: "rules/overrides",
        plugins: {
            "@typescript-eslint": ts.plugin,
        },
        rules: {
            "no-console": "warn",
            "no-unused-vars": "off",
            "no-empty": ["warn", { allowEmptyCatch: true }],
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_",
                },
            ],
        },
    },

    // MUST be last
    {
        name: "prettier",
        ...eslintConfigPrettier,
    },
);
