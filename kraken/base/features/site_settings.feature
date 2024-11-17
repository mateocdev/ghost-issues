Feature: Configuración del Sitio

@user1 @web
Scenario: Config-01: Verificar que un administrador puede actualizar el título del sitio en las configuraciones generales.
  Given I am a logged in admin with "<USERNAME>" and "<PASSWORD>" at "<GHOST_URL>"
  And I wait for 1 seconds
  When I click on settings menu on sidebar
  And I wait for 2 seconds
  And I click on General setting
  And I wait for 2 seconds
  And I click edit Title & description
  And I wait for 3 seconds
  And I enter new title "Curso e2e - Uniandes" for the site
  And I wait for 2 seconds
  And I click on save settings

@user2 @web
Scenario: Config-02: Verificar que un administrador puede cambiar el tema del sitio desde la configuración.
  Given I am a logged in admin with "<USERNAME>" and "<PASSWORD>" at "<GHOST_URL>"
  And I wait for 1 seconds
  When I click on settings menu on sidebar
  And I wait for 2 seconds
  And I click on setting Design
  And I wait for 2 seconds
  And I set a random theme color
  And I wait for 2 seconds
  And I save the design changes
  And I wait for 2 seconds
  And I check the new accent color was saved
