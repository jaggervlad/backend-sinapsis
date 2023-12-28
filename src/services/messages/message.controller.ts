import { NextFunction, Request, Response } from 'express';
import { MessageRepository } from './message.repository';
import { MessageMysqlRepository } from './message.mysql.repository';
import { validateMessageReportQuery } from './message.schema';

const DICTIONARY_STATUS_MESSAGE: Record<number, string> = {
  1: 'Pendiente',
  2: 'Enviado',
  3: 'Error',
};

export class MessageController {
  messageRepository: MessageRepository;

  constructor(messageRepository: MessageRepository) {
    this.messageRepository = messageRepository;
  }

  getMessagesReport = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const query = await validateMessageReportQuery(req.query);

      const messageReport = await this.messageRepository.getMessagesReport({
        month: +query?.month ?? 1,
        clientId: query.clientId ? +query.clientId : undefined,
      });

      const mappedReport = messageReport.map((v) => ({
        ...v,
        shipping_status: DICTIONARY_STATUS_MESSAGE[v.shipping_status],
      }));

      return res.status(200).json({
        ok: true,
        error: null,
        data: mappedReport,
      });
    } catch (error) {
      next(error);
    }
  };
}

const messageRepository = new MessageMysqlRepository();

export const messageController = new MessageController(messageRepository);
