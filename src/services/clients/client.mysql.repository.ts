import { createConnection } from '../../db/mysql-connection';
import { ClientRepository } from './client.repository';
import { Client, ClientRow } from './client.schema';

export class ClientMysqlRepository implements ClientRepository {
  async getAll(): Promise<Client[]> {
    const connection = await createConnection();
    const [clients] = await connection.query<ClientRow[]>(
      'SELECT * FROM clients'
    );

    return clients;
  }
}
