const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions:{
    overwrite: false,
    html: false,
    json: true,
    reportDir: 'reports'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: `https://qauto2.forstudy.space/`,
    env:{
      baseUrl: `https://guest:welcome2qauto@qauto2.forstudy.space`
    },

    //testIsolation: false,
    watchForFileChanges: false,
    specPattern: "cypress/integration/tests/**/*.{js, ts, tsx, jsx}"
  },
  //experimentalStudio: true
  fixturesFolder: "cypress/integration/fixtures"

});
