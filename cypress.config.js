// https://docs.cypress.io/guides/references/configuration
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mi4yu1',
  e2e: {
    experimentalSourceRewriting: true,
    experimentalStudio: true,
    defaultCommandTimeout: 5000,
    specPattern: "**/demo/*.spec.js",
    retries: { "runMode": 1, "openMode": 2 },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  component: {
    defaultCommandTimeout: 5000,
    // component options here
  },
});
