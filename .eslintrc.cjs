module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },

  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['@typescript-eslint', 'vue', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        arrowParens: 'always',
        bracketSpacing: false,
        endOfLine: 'auto',
        'jsxBracketSameLine ': false,
        printWidth: 120,
        proseWrap: 'preserve',
        tabWidth: 2,
        trailingComma: 'none',
        useTabs: false
      }
    ],
    'generator-star-spacing': 'off',
    'import/no-mutable-exports': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off',
    'vue/no-v-html': 'off',
    'vue/require-prop-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/no-v-text-v-html-on-component': 'off', //v-html 허용
    'vue/multi-word-component-names': 'off' //일단 끔 해당프로젝트는 index로만 불러옴
  }
}
