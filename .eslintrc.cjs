/* ESLint configuration for Astro + React + TypeScript */
module.exports = {
  root: true,
  ignorePatterns: ["dist", "node_modules"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true }
  },
  env: { browser: true, es2022: true, node: true },
  settings: {
    react: { version: "detect" }
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "import"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:astro/recommended",
    "prettier"
  ],
  overrides: [
    {
      // Astro files parsing
      files: ["**/*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
  // Disable React-specific DOM prop & key rules for Astro templates
  "react/no-unknown-property": "off",
  "react/jsx-key": "off"
      }
    }
  ],
  rules: {
    "react/react-in-jsx-scope": "off", // Astro/React automatic runtime
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "import/order": ["warn", { "newlines-between": "always", "groups": ["builtin", "external", "internal", "parent", "sibling", "index"], "alphabetize": { order: "asc", caseInsensitive: true } }]
  }
};
