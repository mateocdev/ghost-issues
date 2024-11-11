Feature: Configuración del Sitio

Scenario: Actualizar el título del sitio como administrador
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo "mateo.castano1@yahoo.com" y una contraseña "1qa2w3ed$%"
  And hace clic en el botón de inicio de sesión
  And está en la página de configuraciones generales
  When el administrador actualiza el título del sitio a "Nuevo Título"
  Then el título del sitio debería ser "Nuevo Título"

Scenario: Cambiar el tema del sitio como administrador
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo "mateo.castano1@yahoo.com" y una contraseña "1qa2w3ed$%"
  And hace clic en el botón de inicio de sesión
  And está en la página de configuración de temas
  When el administrador cambia el tema del sitio a "Tema Oscuro"
  Then el tema del sitio debería ser "Tema Oscuro"