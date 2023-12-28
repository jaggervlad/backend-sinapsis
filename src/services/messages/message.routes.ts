import { Router } from 'express';
import { messageController } from './message.controller';

export const createMessageRoutes = () => {
  const router = Router();

  /**
   * @swagger
   * tags:
   *   name: Mensajes
   *   description: Rutas para obtener mensajes
   */

  /**
   * @swagger
   * /api/messages/report:
   *   get:
   *     summary: Obtiene un informe de mensajes.
   *     tags:  [Mensajes]
   *     description: Obtiene un informe de mensajes, permitiendo filtrar por mes y cliente.
   *     parameters:
   *       - in: query
   *         name: month
   *         description: Número del mes a filtrar (opcional, por defecto es 1).
   *         schema:
   *           type: integer
   *       - in: query
   *         name: clientId
   *         description: ID del cliente a filtrar (opcional).
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Informe de mensajes.
   *         content:
   *           application/json:
   *             example:
   *               ok: true
   *               error: null
   *               data:
   *                 - shipping_status: "Pendiente"
   *                   message_count: 10
   *                 - shipping_status: "Enviado"
   *                   message_count: 25
   *                 - shipping_status: "Error"
   *                   message_count: 5
   */
  router.get('/report', messageController.getMessagesReport);

  return router;
};
