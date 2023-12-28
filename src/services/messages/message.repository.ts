import { Message, MessageReportResponse } from './message.schema';

export interface MessageRepository {
  getAll(): Promise<Message[]>;
  getMessagesReport({
    month,
    clientId,
  }: {
    month: number;
    clientId?: number;
  }): Promise<MessageReportResponse[]>;
}
