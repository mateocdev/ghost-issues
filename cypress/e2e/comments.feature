Feature: Administración de Comentarios

Scenario: Ver la lista de comentarios en la sección de administrador
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo "mateo.castano1@yahoo.com" y una contraseña "1qa2w3ed$%"
  And hace clic en el botón de inicio de sesión
  And el usuario está en la página de comentarios
  Then el usuario debería ver la lista de comentarios

Scenario: Aprobar un comentario pendiente en la sección de administrador
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo "mateo.castano1@yahoo.com" y una contraseña "1qa2w3ed$%"
  And hace clic en el botón de inicio de sesión
  And el usuario está en la página de comentarios
  When el usuario aprueba un comentario pendiente
  Then el comentario debería estar marcado como aprobado

Scenario: Eliminar un comentario en la sección de administrador
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo "mateo.castano1@yahoo.com" y una contraseña "1qa2w3ed$%"
  And hace clic en el botón de inicio de sesión
  And el usuario está en la página de comentarios
  When el usuario elimina un comentario
  Then el comentario no debería aparecer en la lista de comentarios