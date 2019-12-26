module.exports = {
  plugins: ["cypress"],
  env: {
    mocha: true,
    "cypress/globals": true,
    node: true,
    jquery: true
  },
  rules: {
    strict: "no"
  }
};
