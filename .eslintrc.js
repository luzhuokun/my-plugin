module.exports = {
  root: true,
  parserOptions: {
    parser: require.resolve('babel-eslint'),
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  env: {
    es6: true,
    node: true,
    browser: true
  },
  plugins: [],
  extends: [
    "eslint:recommended"
  ],
  globals: {},
  rules: {
    "semi": ["error", "never"],
    "no-unused-vars": ["warn"],
    "no-console": ["warn"]
  }
}
