import { RowDataPacket } from 'mysql2';
import { z } from 'zod';

export interface Client {
  id: number;
  name: string;
  status: 0 | 1;
  created_at: Date;
  updated_at: Date;
}

export type ClientRow = Client & RowDataPacket;
