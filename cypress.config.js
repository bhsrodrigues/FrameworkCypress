const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  //allowCypressEnv: false,
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config);

      return config;
    },
  }
});