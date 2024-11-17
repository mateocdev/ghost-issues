Feature: Administración de Publicaciones

@user1 @web
Scenario: Post-01 - Verificar que un administrador puede crear una nueva publicación con título y contenido.
  Given I am a logged in admin with "<USERNAME>" and "<PASSWORD>" at "<GHOST_URL>"
  And I wait for 1 seconds
  When I click on Posts menu on sidebar
  And I wait for 1 seconds
  And I click New Post
  And I wait for 2 seconds
  And I click on Post title input
  And I wait for 1 seconds
  And I enter text "My first e2e post"
  And I wait for 1 seconds
  And I click on Begin writing input
  And I wait for 1 seconds
  And I enter text "My first e2e post"
  And I wait for 7 seconds
  And I check post is saved as draft

@user2 @web
Scenario: Post-02 - Verificar que un administrador puede publicar un post existente.
  Given I am a logged in admin with "<USERNAME>" and "<PASSWORD>" at "<GHOST_URL>"
  And I wait for 1 seconds
  When I click on Posts menu on sidebar
  And I wait for 1 seconds
  And I click New Post
  And I wait for 2 seconds
  And I click on Post title input
  And I wait for 1 seconds
  And I enter text "My first e2e post"
  And I wait for 1 seconds
  And I click on Begin writing input
  And I wait for 1 seconds
  And I enter text "My first e2e post"
  And I wait for 7 seconds
  And I check post is saved as draft 
  And I click on publish menu
  And I wait for 2 seconds
  And I click on publish button
  And I wait for 3 seconds
  And I check post is published
