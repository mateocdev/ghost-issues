Feature: Administracion de miembros

Scenario: Member-01 - verificar que un administrador puede crear una nueva etiqueta con solo el nombre
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo "mateo.castano1@yahoo.com" y una contraseña "1qa2w3ed$%"
  And hace clic en el botón de inicio de sesión
  Then el administrador debería ver el panel de control
  Then el administrador crea un nuevo miembro con el nombre "Joe Doe"
  Then el administrador debería ver el miembro creado

# Scenario: Member-02 - verificar que un administrador puede buscar un miembro existente
#  Given el administrador esta en la pagina de inicio de sesion
#   When el administrador ingresa un correo "mateo.castano1@yahoo.com" y una contraseña "1qa2w3ed$%"
#   And hace clic en el botón de inicio de sesión
#   Then el administrador debería ver el panel de control
#   Given I am a logged in admin with "<USERNAME1>" and "<PASSWORD1>"
#   And I wait for 1 seconds
#   When I click on Members menu on sidebar
#   And I wait for a signal containing "member_created" for 60 seconds
#   And I click on search members bar
#   And I wait for 1 seconds
#   And I enter text "Joe Doe"
#   And I wait for 2 seconds
#   And I check there are results in the table