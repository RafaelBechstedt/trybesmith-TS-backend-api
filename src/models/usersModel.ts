import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUser } from '../interfaces/IUser';

async function addUser(user:IUser): Promise<IUser> {
  const { username, vocation, level, password } = user;
  const newUser = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  const [dataInserted] = newUser;
  const { insertId } = dataInserted;
  return {
    id: insertId,
    ...user,
  };
}

// async function getAll(): Promise<IProduct[]> {
//   const [products] = await connection.execute<RowDataPacket[] & IProduct[]>(
//     'SELECT * from Trybesmith.products',
//   );
//   return products;
// }

export default { addUser };