# Proyecto de Pruebas Automatizadas con Kraken

Este repositorio contiene un conjunto de pruebas automatizadas para la aplicación Ghost version BASE utilizando Kraken.
Se ha cubierto 12 escenarios de 5 funcionalidades.

## Contenidos

- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Ejecución de Pruebas](#ejecución-de-pruebas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Licencia](#licencia)

## Requisitos Previos

Antes de comenzar con la instalación, asegúrate de tener lo siguiente instalado en tu sistema:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) (normalmente incluido con Node.js)
- [Git](https://git-scm.com/)

Ahora debes tener una copia de nuestro proyecto

**Clona este repositorio a tu máquina local:**

   ```bash
   git clone https://github.com/tu-usuario/ghost-issues.git
   ```

## Instalación

Sigue estos pasos para configurar el entorno de prueba:

**Ingresa a este directorio dentro del proyecto previamente clonado:**

   ```bash
   cd ghost-issues/entrega-final-e2e
   ```

**Instala las dependencias del proyecto:**

Ejecuta el siguiente comando para instalar Kraken y otras dependencias necesarias:

```bash
npm install
```

## Ejecución de Pruebas
Abrir el archivo properties.json (ubicado en la raiz del proyecto) y asegurese de proporcionar:
- USERNAME: Nombre de usuario de cuenta administrador de Ghost
- PASSWORD: Contrasena de la cuenta administrador de Ghost
- GHOST_URL: URL de la aplicacion Ghost version rc (ej. http://localhost:8081/ghost/#/signin).
**IMPORTANTE: La version rc a utilizar debe ser Ghost 5.95.0, las pruebas e2e estan construidas para esa version**


**Ejecución en la Interfaz de Usuario de Kraken:**

Esto abrirá la interfaz gráfica de Kraken, donde puedes ver las pruebas en tiempo real.

```bash
./node_modules/kraken-node/bin/kraken-node run
```

Esto ejecutará todas las pruebas que se encuentran en los archivos .feature dentro de la carpeta features.
Y adicionalmente tomara screenshots de cada uno de los steps de los escenarios.

## Estructura del Proyecto
- entrega-final-e2e/

- features/: Contiene todos los archivos de prueba escritos en Gherkin.
   - web/step_definitions: definicion de los diferentes pasos usados en las diferentes escenarios de pruebas.
   - web/pages: Clases page object.
   - web/helpers: Utilitarios, como una funcion para capturar screenshots en cada step y generacion de Pool de datos A-priori.
   - features/: Archivos de características que describen los escenarios de prueba usando el lenguaje Gherkin.
   - screenshots/: Directorio donde se almancen las imagenes de cada paso por escenario automatizado, esto sera insumo
   para las posteriores pruebas VRT.
- properties.json: Aquí se encuentran los datos que se inyectan a las pruebas, como las credenciales de sign in y la URL.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE.
