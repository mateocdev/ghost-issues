Feature: Autenticación de Administradores

Scenario: Inicio de sesión exitoso como administrador
  Given el administrador está en la página de inicio de sesión
  When el administrador ingresa un correo "admin@ejemplo.com" y una contraseña "admin123"
  And hace clic en el botón de inicio de sesión
  Then el administrador debería ver el panel de control