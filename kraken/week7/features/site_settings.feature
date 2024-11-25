Feature: Configuración del Sitio

@user1 @web
Scenario: Config-01: Actualizar el título del sitio con un titulo valido
  Given I am a logged in admin with "<USERNAME>" and "<PASSWORD>" at "<GHOST_URL>"
  And I wait for 1 seconds
  When I click on settings menu on sidebar
  And I wait for 2 seconds
  And I click on setting Title & description
  And I wait for 2 seconds
  And I click edit settings
  And I wait for 2 seconds
  And I enter new title for the site
  And I wait for 2 seconds
  And I click on save settings
  And I wait for 2 seconds
  Then I check the new title was saved

@user2 @web
Scenario: Config-02: Actualizar el título del sitio con un titulo fuera del limite
  Given I am a logged in admin with "<USERNAME>" and "<PASSWORD>" at "<GHOST_URL>"
  And I wait for 1 seconds
  When I click on settings menu on sidebar
  And I wait for 2 seconds
  And I click on setting Title & description
  And I wait for 2 seconds
  And I click edit settings
  And I wait for 2 seconds
  And I enter a large title for the site
  And I wait for 2 seconds
  And I click on save settings
  And I wait for 2 seconds
  Then I check the new title was not saved

@user3 @web
Scenario: Config-03: Actualizar el título del sitio con caracteres especiales
  Given I am a logged in admin with "<USERNAME>" and "<PASSWORD>" at "<GHOST_URL>"
  And I wait for 1 seconds
  When I click on settings menu on sidebar
  And I wait for 2 seconds
  And I click on setting Title & description
  And I wait for 2 seconds
  And I click edit settings
  And I wait for 2 seconds
  And I enter a title with special characters for the site
  And I wait for 2 seconds
  And I click on save settings
  And I wait for 2 seconds
  Then I check the new title was saved

@user4 @web
Scenario: Config-04: Actualizar el color del sitio con un color valido
  Given I am a logged in admin with "<USERNAME>" and "<PASSWORD>" at "<GHOST_URL>"
  And I wait for 1 seconds
  When I click on settings menu on sidebar
  And I wait for 2 seconds
  And I click on setting Design & branding
  And I wait for 2 seconds
  And I click customize button
  And I wait for 3 seconds
  And I set a valid theme color
  And I wait for 2 seconds
  And I save the design changes
  And I wait for 2 seconds
  And I check the new accent color was saved

@user5 @web
Scenario: Config-04: Actualizar el color del sitio con un color fuera del limite
  Given I am a logged in admin with "<USERNAME>" and "<PASSWORD>" at "<GHOST_URL>"
  And I wait for 1 seconds
  When I click on settings menu on sidebar
  And I wait for 2 seconds
  And I click on setting Design & branding
  And I wait for 2 seconds
  And I click customize button
  And I wait for 3 seconds
  And I set a large theme color
  And I wait for 2 seconds
  And I save the design changes
  And I wait for 2 seconds
  And I check the new accent color was saved