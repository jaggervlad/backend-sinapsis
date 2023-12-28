import { createConnection } from '../../db/mysql-connection';
import { MessageRepository } from './message.repository';
import {
  Message,
  MessageReportResponse,
  MessageReportResponseRow,
} from './message.schema';

export class MessageMysqlRepository implements MessageRepository {
  getAll(): Promise<Message[]> {
    throw new Error('Method not implemented.');
  }

  async getMessagesReport({
    month,
    clientId,
  }: {
    clientId?: number;
    month: number;
  }): Promise<MessageReportResponse[]> {
    const connection = await createConnection();

    let query = `
    SELECT
      m.shipping_status,
      COUNT(*) AS message_count
    FROM
      messages m
      JOIN campaigns c ON m.campaign_id = c.id
      JOIN users u ON c.user_id = u.id
      JOIN clients cl ON u.client_id = cl.id
    WHERE
      MONTH(m.date_shipping) = ?
    `;

    if (clientId) {
      query += ' AND u.client_id = ?';
    }

    query += `
    GROUP BY
      m.shipping_status
    ORDER BY
      m.shipping_status;
    `;

    const bindParameters = clientId ? [month, clientId] : [month];
    const [messageReport] = await connection.query<MessageReportResponseRow[]>(
      query,
      bindParameters
    );

    return messageReport;
  }
}
