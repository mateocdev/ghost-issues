Feature: Administración de Tags

@user1 @web
Scenario: Tag-01: Crear una nueva etiqueta con nombre y descripcion valida
  Given I am a logged in admin with "<USERNAME>" and "<PASSWORD>" at "<GHOST_URL>"
  And I wait for 1 seconds
  When I click on Tags menu on sidebar
  And I wait for 1 seconds
  And I click New tag
  And I wait for 2 seconds
  And I enter tag info
  And I wait for 1 seconds
  And I click on save button
  And I wait for 2 seconds
  And I check tag is saved

@user2 @web
Scenario: Tag-02: Crear una nueva etiqueta con nombre y descripcion fuera del limite
  Given I am a logged in admin with "<USERNAME>" and "<PASSWORD>" at "<GHOST_URL>"
  And I wait for 1 seconds
  When I click on Tags menu on sidebar
  And I wait for 1 seconds
  And I click New tag
  And I wait for 2 seconds
  And I enter large tag info
  And I wait for 1 seconds
  And I click on save button
  And I wait for 2 seconds
  And I check tag is not saved

@user3 @web
Scenario: Tag-03: Crear una nueva etiqueta con nombre y descripcion caracteres especiales
  Given I am a logged in admin with "<USERNAME>" and "<PASSWORD>" at "<GHOST_URL>"
  And I wait for 1 seconds
  When I click on Tags menu on sidebar
  And I wait for 1 seconds
  And I click New tag
  And I wait for 2 seconds
  And I enter special characters tag info
  And I wait for 1 seconds
  And I click on save button
  And I wait for 2 seconds
  And I check tag is saved