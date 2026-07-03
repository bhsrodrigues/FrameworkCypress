const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  //allowCypressEnv: false,
  e2e: {
    setupNodeEvents(on, config) {
      // Configura o Allure no ciclo de vida do Cypress
      allureCypress(on, config,{
        resultsDir : 'resultados-testes-1234'
      });
      
      return config;
    }
  },
});