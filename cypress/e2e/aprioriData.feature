Feature: A-Priori Data

Scenario: APD-01 Crear un usuario con rol específico y validar su creación
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo y una contraseña
  When hace clic en el botón de inicio de sesión
  Then el administrador debería ver el panel de control
