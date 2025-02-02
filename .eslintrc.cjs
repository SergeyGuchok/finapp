module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  plugins: [
    '@stylistic'
  ],
  extends: ['airbnb-base', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-undef': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    '@stylistic/eol-last': ['error', 'always']
  },
};
