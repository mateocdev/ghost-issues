Feature: Administración de miembros

@user1 @web
Scenario: Member-01: Crear un nuevo miembro con datos validos
  Given I am a logged in admin with "<USERNAME>" and "<PASSWORD>" at "<GHOST_URL>"
  And I wait for 1 seconds
  When I click on Members menu on sidebar
  And I wait for 1 seconds
  And I click New Member button
  And I wait for 2 seconds
  And I enter required member info
  And I wait for 1 seconds
  And I click on save Member button
  And I wait for 2 seconds
  Then I check Member is saved



@user3 @web
Scenario: Member-03: Crear un nuevo miembro con correo duplicado
  Given I am a logged in admin with "<USERNAME>" and "<PASSWORD>" at "<GHOST_URL>"
  And I wait for 1 seconds
  When I click on Members menu on sidebar
  And I wait for 1 seconds
  And I click New Member button
  And I wait for 2 seconds
  And I enter required member info
  And I wait for 1 seconds
  And I click on save Member button
  And I wait for 2 seconds
  Then I check Member is duplicated