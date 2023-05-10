import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { IOrder } from '../interfaces/IOrder';

async function getAll(): Promise<IOrder[]> {
  const [orders] = await connection.execute<RowDataPacket[] & IOrder[]>(
    `SELECT orders.id, orders.user_id AS userId, JSON_ARRAYAGG(products.id) AS productsIds
    FROM Trybesmith.orders AS orders
    INNER JOIN Trybesmith.products AS products ON orders.id = products.order_id
    GROUP BY orders.id`,
  );
  return orders;
}

export default { getAll };