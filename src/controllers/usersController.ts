import { Request, Response } from 'express';
import { IUser } from '../interfaces/IUser';
import usersService from '../services/usersService';

async function addUser(req: Request, res: Response) {
  const user = req.body as IUser;
  const token = await usersService.addUser(user);
  return res.status(201).json({ token });
}

// async function getAll(req: Request, res: Response) {
//   const products = await productsService.getAll();
//   return res.status(200).json(products);
// }
export default { addUser };