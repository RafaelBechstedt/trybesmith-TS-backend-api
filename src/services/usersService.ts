import { IUser } from '../interfaces/IUser';
import usersModel from '../models/usersModel';
import token from '../utils/token';

async function addUser(user:IUser): Promise<string> {
  const newUser = await usersModel.addUser(user);
  const tokenKey = token.generateToken(newUser);
  return tokenKey;
}

// async function getAll(): Promise<IProduct[]> {
//   const products = await productsModel.getAll();
//   return products;
// }

export default { addUser };