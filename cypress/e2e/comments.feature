Feature: Administración de comentarios

Scenario: Ver la lista de comentarios en la sección de administrador
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo "mateo.castano1@yahoo.com" y una contraseña "1qa2w3ed$%"
  And hace clic en el botón de inicio de sesión
  Then el usuario hace click en settings
  Then el usuario hace click en editar settings
  Then se le da permiso a todos los miembros para comentario
  Then se guarda la configuracion de los comentarios


Scenario: Ver la lista de comentarios en la sección de administrador base
  Given el administrador esta en la pagina de inicio de sesion base
  When el administrador ingresa un correo "mateo.castano1@yahoo.com" y una contraseña "1qa2w3ed$%" base
  Then el usuario hace click en settings base
  Then el usuario hace click en editar settings base
  Then se le da permiso a todos los miembros para comentario base
  Then se guarda la configuracion de los comentarios base
