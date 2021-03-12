module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // "plugin:vue/vue3-base",
    'eslint:recommended',
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-strongly-recommended",
    'plugin:vue/vue3-recommended',
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  },
  "env": {
    "node": true,
    "jest": true
  }
  // parser: 'babel-eslint',
  // parserOptions: {
  // sourceType: 'module',
  // allowImportExportEverywhere: true
  // }
  
}
