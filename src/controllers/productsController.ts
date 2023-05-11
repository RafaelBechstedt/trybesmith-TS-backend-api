import { Request, Response } from 'express';
import { IProduct } from '../interfaces/IProduct';
import productsService from '../services/productsService';

async function addProduct(req: Request, res: Response) {
  const product = req.body as IProduct;
  const newProduct = await productsService.addProduct(product);
  return res.status(201).json(newProduct);
}

async function getAll(req: Request, res: Response) {
  const products = await productsService.getAll();
  return res.status(200).json(products);
}

export default { addProduct, getAll };