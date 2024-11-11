Feature: Administración de miembros

@user1 @web
Scenario: Comment-01: Verificar que un administrador puede ver la lista de comentarios en una publicación.
  Given I am a logged in admin with "<USERNAME1>" and "<PASSWORD1>"
  And I wait for 2 seconds
  When I click on settings menu on sidebar
  And I wait for 2 seconds
  And I click on access settings menu on sidebar
  And I wait for 1 seconds
  And I click edit access settings
  And I wait for 2 seconds
  And I set allow all members to comment
  And I wait for 2 seconds
  And I click on save comments config
