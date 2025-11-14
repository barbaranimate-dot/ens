// eslint.config.js
import nextPlugin from "eslint-config-next";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  // Config dasar dari ESLint dan TypeScript
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Config bawaan Next.js
  ...nextPlugin,

  // React hooks plugin
  {
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },

  // Custom rules tambahan (optional)
  {
    rules: {
      "no-unused-vars": "warn",
      "react-hooks/exhaustive-deps": "warn",
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
