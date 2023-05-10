import { Request, Response } from 'express';
import ordersService from '../services/ordersService';

async function getAll(req: Request, res: Response) {
  const orders = await ordersService.getAll();
  return res.status(200).json(orders);
}
export default { getAll };