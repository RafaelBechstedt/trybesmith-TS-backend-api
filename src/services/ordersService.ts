import { IOrder } from '../interfaces/IOrder';
import ordersModel from '../models/ordersModel';

async function getAll(): Promise<IOrder[]> {
  const orders = await ordersModel.getAll();
  return orders;
}

export default { getAll };