import { Router } from 'express';
import { clientController } from './client.controller';

export const createClientRoutes = () => {
  const router = Router();

  router.get('/', clientController.getAll);

  return router;
};
