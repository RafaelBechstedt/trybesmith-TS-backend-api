import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IProduct } from '../interfaces/IProduct';
import connection from './connection';

async function addProduct(product:IProduct): Promise<IProduct> {
  const { name, amount } = product;
  const newProduct = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  const [dataInserted] = newProduct;
  const { insertId } = dataInserted;
  return {
    id: insertId,
    ...product,
  };
}

async function getAll(): Promise<IProduct[]> {
  const [products] = await connection.execute<RowDataPacket[] & IProduct[]>(
    'SELECT * from Trybesmith.products',
  );
  return products;
}

export default { addProduct, getAll };