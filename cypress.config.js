const { defineConfig } = require("cypress");

module.exports = defineConfig({
    viewportHeight : 768,
    viewportWidth: 1024,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://demo.nopcommerce.com",
  },
});
