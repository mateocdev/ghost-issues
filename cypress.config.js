const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Configurar el preprocesador de Cucumber
      on("file:preprocessor", cucumber());

      // Asegúrate de que el patrón de especificaciones es correcto
      config.specPattern = "**/*.feature";

      // Devuelve la configuración para que Cypress la use
      return config;
    },
    // Establecer el directorio de especificaciones si es necesario
    specPattern: "cypress/e2e/**/*.feature",
  },
});
