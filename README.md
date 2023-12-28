# Sinapsis API REST

Este proyecto es un servicio API desarrollado con Serverless, Express, Typescript y MySQL.

## Requisitos Previos

Asegúrate de tener instalados los siguientes elementos antes de ejecutar la aplicación:

- Node.js
- npm o yarn
- serverless

## Configuración

1. **Clona el repositorio:**

   ```bash
   git clone git@github.com:jaggervlad/backend-sinapsis.git
   cd backend-sinapsis
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**

   Renombra el archivo .env-example -> .env y añade la url de tu base de datos MySQL

4. **Ejecutar entorno de desarrollo:**
   ```bash
   npm run dev
   ```

5. **Ejecutar entorno de desarrollo serverless:**
   ```bash
   npm serverless:dev
   ```


## Estructura del Proyecto
```sql
tu-proyecto/
|-- src/
|   |-- db/
|   |-- middlewares/
|   |-- services/
|   |-- app.ts -
|-- ...
```

## Endpoints

### `GET /api/messages/report`

Este endpoint proporciona un informe de mensajes, permitiendo filtrar la información por mes y opcionalmente por cliente. El controlador asociado valida y procesa los parámetros de consulta, obteniendo el informe de mensajes correspondiente desde el repositorio de mensajes.

Ejemplo:

```bash
curl http://localhost:4000/api/messages?month=1&clientId=2
