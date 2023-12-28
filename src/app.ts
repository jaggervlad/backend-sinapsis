import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import { errorMiddleware } from './middlewares/error.handler';
import { publicRoutes } from './routes';

const createApp = () => {
  const port = process.env.PORT || 4000;

  const app = express();

  // Middlawares
  app.use(express.json());
  app.use(cors());
  app.use(helmet());
  app.use(morgan('dev'));

  // Routes
  app.use('/api', publicRoutes());

  // Handle Error Middleware
  app.use(errorMiddleware);

  // Start server
  app.listen(port, () => {
    console.log(`🚀[server] Listening on port: ${port}`);
  });

  return app;
};

export { createApp };