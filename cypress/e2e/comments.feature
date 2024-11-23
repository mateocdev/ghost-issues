Feature: Administración de comentarios

Scenario: Ver la lista de comentarios en la sección de administrador
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo y una contraseña
  When hace clic en el botón de inicio de sesión
  Then el administrador debería ver el panel de control
