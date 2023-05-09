import { Request, Response } from 'express';
import { IProduct } from '../interfaces/IProduct';
import productsService from '../services/productsService';

async function addProduct(req: Request, res: Response) {
  const product = req.body as IProduct;
  const newProduct = await productsService.addProduct(product);
  return res.status(201).json(newProduct);
}

export default { addProduct };