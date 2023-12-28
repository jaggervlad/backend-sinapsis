import { Client } from './client.schema';

export interface ClientRepository {
  getAll(): Promise<Client[]>;
}
