// eslint.config.js
import typescript from "@typescript-eslint/eslint-plugin";
import eslintPluginNext from "eslint-plugin-next";

export default [
  {
    files: ["**/*.{js,ts,jsx,tsx}"],

    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },

    plugins: {
      "@typescript-eslint": typescript,
      "next": eslintPluginNext,
    },

    rules: {
      // your rules here, e.g.:
      "@typescript-eslint/no-unused-vars": "warn",
      "no-console": "warn",
    },
  },
];
