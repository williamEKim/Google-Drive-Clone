// eslint.config.js
import eslintPluginNext from "eslint-plugin-next";

export default [
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    plugins: { next: eslintPluginNext },
    rules: {},
  },
];
