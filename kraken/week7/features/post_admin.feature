Feature: Administración de Publicaciones

@user1 @web
Scenario: Post-01: Crear una nueva publicación con título y contenido valido
  Given I am a logged in admin with "<USERNAME>" and "<PASSWORD>" at "<GHOST_URL>"
  And I wait for 1 seconds
  When I click on Posts menu on sidebar
  And I wait for 1 seconds
  And I click New Post
  And I wait for 2 seconds
  And I enter Post info with valid random title and content
  And I wait for 10 seconds
  Then I check post is saved as draft

@user2 @web
Scenario: Post-02: Crear nuevo Post con titulo que excede largo permitido
  Given I am a logged in admin with "<USERNAME>" and "<PASSWORD>" at "<GHOST_URL>"
  And I wait for 1 seconds
  When I click on Posts menu on sidebar
  And I wait for 1 seconds
  And I click New Post
  And I wait for 2 seconds
  And I enter Post info with large title
  And I wait for 10 seconds
  Then I check post is not saved as draft

@user3 @web
Scenario: Post-03: Crear nuevo Post con titulo que contiene caracteres especiales
  Given I am a logged in admin with "<USERNAME>" and "<PASSWORD>" at "<GHOST_URL>"
  And I wait for 1 seconds
  When I click on Posts menu on sidebar
  And I wait for 1 seconds
  And I click New Post
  And I wait for 2 seconds
  And I enter Post info with special characters title
  And I wait for 10 seconds
  Then I check post is saved as draft
  Then I send a signal to user 4 containing "special_post_created"

@user4 @web
Scenario: Post-04: Buscar post con titulo que contiene caracteres especiales
  Given I am a logged in admin with "<USERNAME>" and "<PASSWORD>" at "<GHOST_URL>"
  And I wait for a signal containing "special_post_created" for 60 seconds
  And I click on search button
  And I wait for 1 seconds
  And I enter search term
  And I wait for 2 seconds
  Then I got no results for the search term

@user5 @web
Scenario: Post-05: Crear nuevo Post con título o contenido en blanco
  Given I am a logged in admin with "<USERNAME>" and "<PASSWORD>" at "<GHOST_URL>"
  And I wait for 1 seconds
  When I click on Posts menu on sidebar
  And I wait for 1 seconds
  And I click New Post
  And I wait for 2 seconds
  And I enter Post info with blank title or content
  And I wait for 10 seconds
  Then I check post is not saved as draft

@user6 @web
Scenario: Post-06: Publicar Post con título o contenido en blanco
  Given I am a logged in admin with "<USERNAME>" and "<PASSWORD>" at "<GHOST_URL>"
  And I wait for 1 seconds
  When I click on Posts menu on sidebar
  And I wait for 1 seconds
  And I click New Post
  And I wait for 2 seconds
  And I enter Post info with blank title or content
  And I wait for 10 seconds
  And I click on publish
  And I wait for 2 seconds
  And I click on continue to final review
  And I wait for 2 seconds
  And I click on publish, right now
  And I wait for 3 seconds
  And I check post is published

@user7 @web
Scenario: Post-07: Editar Post a título y contenido en blanco y publicar
  Given I am a logged in admin with "<USERNAME>" and "<PASSWORD>" at "<GHOST_URL>"
  And I wait for 1 seconds
  When I click on Posts menu on sidebar
  And I wait for 1 seconds
  And I click New Post
  And I wait for 2 seconds
  And I enter Post info with blank title or content
  And I wait for 7 seconds
  And I go back to Post list
  And I wait for 2 seconds
  And I click on draft Posts
  And I wait for 2 seconds
  And I click on edit Post
  And I wait for 2 seconds
  And I blank title and content
  And I wait for 9 seconds
  And I click on publish
  And I wait for 2 seconds
  And I click on continue to final review
  And I wait for 2 seconds
  And I click on publish, right now
  And I wait for 3 seconds
  And I check post is published

@user8 @web
Scenario: Post-08: Publicar post nuevo con título y contenido.
  Given I am a logged in admin with "<USERNAME>" and "<PASSWORD>" at "<GHOST_URL>"
  And I wait for 1 seconds
  When I click on Posts menu on sidebar
  And I wait for 1 seconds
  And I click New Post
  And I wait for 2 seconds
  And I enter Post info with valid random title and content
  And I wait for 10 seconds
  And I check post is saved as draft
  And I click on publish
  And I wait for 2 seconds
  And I click on continue to final review
  And I wait for 2 seconds
  And I click on publish, right now
  And I wait for 3 seconds
  And I check post is published