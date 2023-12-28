import { Router } from 'express';
import { messageController } from './message.controller';

export const createMessageRoutes = () => {
  const router = Router();

  router.get('/report', messageController.getMessagesReport);

  return router;
};
