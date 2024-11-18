Feature: Configuración del Sitio

Scenario: Actualizar el título del sitio como administrador
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo "mateo.castano1@yahoo.com" y una contraseña "1qa2w3ed$%"
  And hace clic en el botón de inicio de sesión
  Then está en la página de configuraciones generales
  When el administrador actualiza el título del sitio a "Nuevo Título"
  Then el título del sitio debería ser "Nuevo Título"

Scenario: Cambiar el tema del sitio como administrador
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo "mateo.castano1@yahoo.com" y una contraseña "1qa2w3ed$%"
  And hace clic en el botón de inicio de sesión
  Then está en la página de configuración de temas
  When el administrador cambia a un color aleatorio
  Then se guardaron los cambios del diseño de color

Scenario: Actualizar el título del sitio como administrador base
  Given el administrador esta en la pagina de inicio de sesion base
  When el administrador ingresa un correo "mateo.castano1@yahoo.com" y una contraseña "1qa2w3ed$%" base
  Then está en la página de configuraciones generales base
  When el administrador actualiza el título del sitio a "Nuevo Título" base
  Then el título del sitio debería ser "Nuevo Título" base

Scenario: Cambiar el tema del sitio como administrador base
  Given el administrador esta en la pagina de inicio de sesion base
  When el administrador ingresa un correo "mateo.castano1@yahoo.com" y una contraseña "1qa2w3ed$%" base
  Then está en la página de configuración de temas base
  When el administrador cambia a un color aleatorio base
  Then se guardaron los cambios del diseño de color base