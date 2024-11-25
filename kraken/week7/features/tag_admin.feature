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

@user4 @web
Scenario: Tag-04: Crear una nueva etiqueta y asociar a Post
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
  Then I send a signal to user 5 containing "tag_created"

@user5 @web
Scenario: Tag-02: - Verificar que un administrador puede asignar etiquetas a una publicación.
  Given I am a logged in admin with "<USERNAME>" and "<PASSWORD>" at "<GHOST_URL>"
  And I wait for 1 seconds
  And I click on Posts menu on sidebar
  And I wait for 1 seconds
  When I click New Post
  And I wait for 2 seconds
  And I enter Post info with valid random title and content
  And I check post is saved as draft 
  And I wait for a signal containing "tag_created" for 60 seconds
  And I click on post settings button
  And I wait for 2 seconds
  And I click on tags input
  And I wait for 1 seconds
  And I enter text "e2e-tag"
  And I wait for 1 seconds
  And I confirm adding tag to post
  And I wait for 1 seconds
  Then I force post to be saved returning to post list