/*
 * @Author: xingjin
 * @Date: 2023-07-24 11:27:57
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-25 16:17:42
 * @Description: 请填写简介
 */
module.exports = {
  parser: '@typescript-eslint/parser', // 新增 parser 键值。
  plugins: ['vue', 'prettier'],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
    './.eslintrc-auto-import.json',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'no-var': 'error',
    '@typescript-eslint/no-explicit-any': ['off'],
    'vue/multi-word-component-names': 0,
    '@typescript-eslint/ban-types': 'error',
  },
};
