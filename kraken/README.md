# Proyecto de Pruebas Automatizadas con Kraken

Este repositorio contiene un conjunto de pruebas automatizadas para la aplicación Ghost utilizando Kraken.
Se ha cubierto 10 escenarios de 5 funcionalidades.

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

## Instalación

Sigue estos pasos para configurar el entorno de prueba:

**Clona este repositorio a tu máquina local:**

   ```bash
   git clone https://github.com/tu-usuario/ghost-issues.git
   cd ghost-issues/kraken
   ```

**Instala las dependencias del proyecto:**

Ejecuta el siguiente comando para instalar Kraken y otras dependencias necesarias:

```bash
npm install
```


## Ejecución de Pruebas
Antes de ejecutar las pruebas asegurese de proporcionar las credenciales de una cuenta administrador de ghost
en el archivo properties.json ubicado en la raiz del proyecto.

**Ejecución en la Interfaz de Usuario de Kraken:**

Esto abrirá la interfaz gráfica de Kraken, donde puedes ver las pruebas en tiempo real.

```bash
./node_modules/kraken-node/bin/kraken-node run
```

Esto ejecutará todas las pruebas que se encuentran en los archivos .feature dentro de la carpeta features.

## Estructura del Proyecto
- Kraken/

- features/: Contiene todos los archivos de prueba escritos en Gherkin.
   - web/step_definitions: definicion de los diferentes pasos usados en las diferentes escenarios de pruebas.
   - features/: Archivos de características que describen los escenarios de prueba usando el lenguaje Gherkin.
- properties.json: Aquí se encuentran los datos que se inyectan a las pruebas, como las credenciales de sign in.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE.

