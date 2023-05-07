const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ae677g',
  e2e: {
    baseUrl: 'http://quotes.toscrape.com/',
    defaultCommandTimeout: 10000,
    viewportWidth: 1440,
    viewportHeight: 900,
    setupNodeEvents(on, config) {
    },
  },
});
