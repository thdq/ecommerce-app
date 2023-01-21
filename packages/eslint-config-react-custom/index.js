module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  root: true,
  extends: [
    "standard-with-typescript",
    "prettier"
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
