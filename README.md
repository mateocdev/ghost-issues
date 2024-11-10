# Proyecto de Pruebas Automatizadas con Cypress

Este repositorio contiene un conjunto de pruebas automatizadas para la aplicación utilizando Cypress. Las pruebas están diseñadas para asegurar la correcta funcionalidad de las características clave desde la perspectiva de un administrador.

## Contenidos

- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Ejecución de Pruebas](#ejecución-de-pruebas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Licencia](#licencia)

## Requisitos Previos

Antes de comenzar con la instalación, asegúrate de tener lo siguiente instalado en tu sistema:

- [Node.js](https://nodejs.org/) (versión 12 o superior)
- [npm](https://www.npmjs.com/) (normalmente incluido con Node.js)
- [Git](https://git-scm.com/)

## Instalación

Sigue estos pasos para configurar el entorno de prueba:

1. **Clona este repositorio a tu máquina local:**

   ```bash
   git clone https://github.com/tu-usuario/ghost-issues.git
   cd ghost-issues
   ```

2. **Instala las dependencias del proyecto:

Ejecuta el siguiente comando para instalar Cypress y otras dependencias necesarias:

```bash
npm install
```


3. **Ejecución de Pruebas**
Una vez que hayas instalado las dependencias, puedes ejecutar las pruebas de las siguientes maneras:

Ejecución en la Interfaz de Usuario de Cypress:

Esto abrirá la interfaz gráfica de Cypress, donde puedes ver las pruebas en tiempo real.

```bash
npx cypress open
```

Una vez abierta la interfaz, selecciona el archivo de características que deseas ejecutar.

Ejecución en la Línea de Comandos:

Si prefieres ejecutar las pruebas en modo headless (sin interfaz gráfica), puedes hacerlo con:

```bash
npx cypress run
```

Esto ejecutará todas las pruebas en el directorio cypress/e2e.

4. **Estructura del Proyecto**
- cypress/

- e2e/: Contiene todos los archivos de prueba escritos en Gherkin.
- fixtures/: Aquí se encuentran los datos de prueba si son necesarios.
- support/: Archivos de configuración y comandos personalizados para Cypress.
- features/: Archivos de características que describen los escenarios de prueba usando el lenguaje Gherkin.

5. **Licencia**
Este proyecto está licenciado bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE.

