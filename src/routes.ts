import { Router } from 'express';
import { createUserRoutes } from './services/users';
import { createMessageRoutes } from './services/messages';
import { createClientRoutes } from './services/clients';

export const publicRoutes = () => {
  const publicRouter = Router();

  publicRouter.use('/users', createUserRoutes());
  publicRouter.use('/clients', createClientRoutes());
  publicRouter.use('/messages', createMessageRoutes());

  return publicRouter;
};
