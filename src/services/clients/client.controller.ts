import { NextFunction, Request, Response } from 'express';
import { ClientRepository } from './client.repository';
import { ClientMysqlRepository } from './client.mysql.repository';

export class ClientController {
  clientRepository: ClientRepository;

  constructor(clientRepository: ClientRepository) {
    this.clientRepository = clientRepository;
  }

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.clientRepository.getAll();

      return res.status(200).json({
        ok: true,
        error: null,
        data: users,
      });
    } catch (error) {
      next(error);
    }
  };
}

const clientRepository = new ClientMysqlRepository();

export const clientController = new ClientController(clientRepository);
