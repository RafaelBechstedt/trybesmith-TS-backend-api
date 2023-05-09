import { IProduct } from '../interfaces/IProduct';
import productsModel from '../models/productsModel';

async function addProduct(product:IProduct) {
  const newProduct = await productsModel.addProduct(product);
  return newProduct;
}

export default { addProduct };