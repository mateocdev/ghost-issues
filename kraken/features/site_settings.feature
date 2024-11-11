Feature: Configuración del Sitio

@user1 @web
Scenario: Config-01: Verificar que un administrador puede actualizar el título del sitio en las configuraciones generales.
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "<USERNAME1>"
  And I enter password "<PASSWORD1>"
  And I wait for 1 seconds
  And I click sign in
  And I wait for 1 seconds
  And I click on settings menu on sidebar
  And I wait for 2 seconds
  And I click on setting Title & description
  And I wait for 2 seconds
  And I click edit settings
  And I wait for 2 seconds
  And I enter new title "Curso e2e - Uniandes" for the site
  And I wait for 2 seconds
  And I click on save settings

@user2 @web
Scenario: Config-02: Verificar que un administrador puede cambiar el tema del sitio desde la configuración.
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "<USERNAME1>"
  And I enter password "<PASSWORD1>"
  And I wait for 1 seconds
  And I click sign in
  And I wait for 1 seconds
  And I click on settings menu on sidebar
  And I wait for 2 seconds
  And I click on setting Design & branding
  And I wait for 2 seconds
  And I click customize button
  And I wait for 3 seconds
  And I set a random theme color
  And I wait for 2 seconds
  And I save the design changes
  And I wait for 2 seconds
  And I check the new accent color was saved