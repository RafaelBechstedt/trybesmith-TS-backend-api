import { IProduct } from '../interfaces/IProduct';
import productsModel from '../models/productsModel';

async function addProduct(product:IProduct): Promise<IProduct> {
  const newProduct = await productsModel.addProduct(product);
  return newProduct;
}

async function getAll(): Promise<IProduct[]> {
  const products = await productsModel.getAll();
  return products;
}

export default { addProduct, getAll };