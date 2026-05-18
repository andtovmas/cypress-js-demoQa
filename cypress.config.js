require('dotenv').config();

module.exports = {
  viewportWidth: 1920,
  viewportHeight: 1080,

  e2e: {
    baseUrl: process.env.BASE_URL,
    env: {
      apiBaseUrl: process.env.API_BASE_URL,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
