Feature: A-Priori Data

# Scenario: APD-01 Crear un usuario y validar su creación
#   Given el administrador esta en la pagina de inicio de sesion
#   When el administrador ingresa un correo y una contraseña
#   When hace clic en el botón de inicio de sesión
#   When el administrador ingresa a la pagina de miembros
#   Then el administrador hace click en nuevo miembro
#   Then el administrador ingresa los datos del nuevo miembro
#   Then el administrador hace click en el botón de guardar
#   Then el administrador ingresa a la pagina de miembros
#   Then el administrador deberia ver el nuevo miembro en la lista de miembros

Scenario: APD-02 Crear un tag y validar su creacion
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo y una contraseña
  When hace clic en el botón de inicio de sesión
  When el administrador ingresa a la pagina de tags
  Then el administrador hace click en nuevo tag
  Then el administrador ingresa los datos del nuevo tag
  Then el administrador hace click en el botón de guardar
  Then el administrador ingresa a la pagina de tags
  Then el administrador deberia ver el nuevo tag en la lista de tags
