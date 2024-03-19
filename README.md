# Prueba Tecnica

Prueba tecnica - aplicación web utilizando Angular 17 y Bootstrap 5.3.
consumiendo API local creada con JSON Server

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/es/) (y npm)
- Angular CLI (puedes instalarlo ejecutando `npm install -g @angular/cli`)

## Instalación

1.  Clona este repositorio en tu máquina local.
2. Navega hasta la carpeta `frontend` en tu terminal o símbolo del sistema.
3. Ejecuta el siguiente comando para instalar las dependencias del proyecto:

npm install


## Iniciar el Servidor de Desarrollo

### Frontend (Angular)

Una vez que todas las dependencias estén instaladas, puedes iniciar el servidor de desarrollo de Angular ejecutando:

ng serve


Esto iniciará el servidor de desarrollo de Angular. Para acceder a la aplicación, abre un navegador web y ve a `http://localhost:4200/`.

### Backend (JSON Server)

Para iniciar el servidor de desarrollo del backend utilizando JSON Server, sigue estos pasos:

1. Abre una terminal o símbolo del sistema.
2. Navega hasta la carpeta `backend`.
3. Ejecuta el siguiente comando para iniciar JSON Server y proporcionar una API REST simulada:

npx json-server --watch db.json



Esto iniciará JSON Server y leerá el archivo `db.json` para proporcionar una API REST simulada. Por defecto, estará disponible en `http://localhost:3000/`.

## Uso

La aplicación se inicia en la ventana de "Registro de Ventas", la cual ofrece las siguientes funcionalidades:

### Listado de Ventas

- Al iniciar sesión, se muestra un listado de todas las ventas registradas.
- Hay dos botones disponibles:
  1. **Registrar Venta**: Al hacer clic en este botón, se abre un formulario para registrar una nueva venta.
  2. **Ver Detalles**: Permite visualizar los detalles de una venta específica seleccionada en la lista. Al hacer clic en este botón, se abrirá una vista detallada que contiene la información completa de la venta.

### Detalle de Venta

- Esta vista muestra todos los detalles de una venta específica.
- Además de la información detallada de la venta, se encuentran dos botones adicionales:
  1. **Editar**: Al hacer clic en este botón, se redirige al usuario a un formulario para editar la venta.
  2. **Eliminar**: Al hacer clic en este botón, se elimina permanentemente la venta de la base de datos.




