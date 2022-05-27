module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 'off',
    indent: [2, "tab"],
    "no-tabs": 0,
    'indent': 'off',
    quotes: [0, "double"],
    "skipBlankLines": 0,
    "space-before-function-paren": ["error", "never"],
    "object-shorthand": ["error", "always", { "avoidQuotes": true }]
  }
}
