import { Request, Response } from 'express';
import ordersService from '../services/ordersService';
import { IToken } from '../interfaces/IToken';

interface RequestWithUserRole extends Request {
  user?: IToken,
}

async function getAll(req: Request, res: Response) {
  const orders = await ordersService.getAll();
  return res.status(200).json(orders);
}

async function createOrder(req: RequestWithUserRole, res: Response) {
  if (req.user !== undefined) {
    await ordersService.createOrder(req.body, Number(req.user.id));
    return res.status(201).json({ userId: Number(req.user.id), productsIds: req.body.productsIds });
  }
}

export default { getAll, createOrder };