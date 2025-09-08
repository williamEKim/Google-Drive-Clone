// eslint.config.js (ESM)
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default [
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    ignores: ["node_modules", ".next"],
    extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  },
];
