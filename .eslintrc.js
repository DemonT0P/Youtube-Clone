module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ["html"],
  extends: "eslint:recommended",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
  globals: {
    window: "true",
    module: "true",
  },
};
