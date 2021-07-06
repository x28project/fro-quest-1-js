module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // disabled rules that conflict with sariendotnet and generated code
    'consistent-return': 'off',
    'default-case': 'off',
    'func-names': 'off',
    'no-alert': 'off',
    'no-constant-condition': 'off',
    'no-extra-boolean-cast': 'off',
    'no-extra-label': 'off',
    'no-fallthrough': 'off',
    'no-labels': 'off',
    'no-restricted-syntax': ['error', 'ForOfStatement', 'WithStatement'],
    'no-undef': 'off',
    'no-unused-labels': 'off',
    'no-var': 'off',
    'spaced-comment': 'off',
    'vars-on-top': 'off',
  },
};
