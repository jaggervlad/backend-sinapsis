import { RowDataPacket } from 'mysql2';
import { z } from 'zod';

export interface Message {
  id: number;
  campaign_id: number;
  shipping_status: 0 | 1 | 2 | 3;
  date_shipping: Date;
  message: string;
  status: 0 | 1;
  created_at: Date;
  updated_at: Date;
}

export interface MessageReportResponse {
  shipping_status: number;
  message_count: number;
}

export const messageReportQuerySchema = z.object({
  month: z.string({ required_error: 'Mes es requerido' }),
  clientId: z.string().optional(),
});

export const validateMessageReportQuery = (body: any) => {
  return messageReportQuerySchema.parseAsync(body);
};

export type MessageReportResponseRow = MessageReportResponse & RowDataPacket;

export type MessageRow = Message & RowDataPacket;
