import { IOrder } from '../interfaces/IOrder';
import ordersModel from '../models/ordersModel';

async function getAll(): Promise<IOrder[]> {
  const orders = await ordersModel.getAll();
  return orders;
}

async function createOrder(order: { productsIds: number[] }, userId: number):
Promise<null | { message: string }> {
  await ordersModel.createOrder(order, userId);
  return null;
}

export default { getAll, createOrder };