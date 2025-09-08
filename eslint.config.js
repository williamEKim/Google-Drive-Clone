// eslint.config.js
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  ...compat.extends("eslint:recommended"),
  ...compat.extends("plugin:@typescript-eslint/recommended"),
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // your custom rules here
    },
  },
];
