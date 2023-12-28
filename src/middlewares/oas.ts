import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sinapsis API REST',
      version: '1.0.0',
      description:
        'Este proyecto es un servicio API desarrollado con Serverless, Express, Typescript y MySQL.',
    },
    servers: [
      {
        url: 'http://localhost:4000',
      },
    ],
  },
  apis: ['**/*.ts'],
};

export const specs = swaggerJsDoc(options);
