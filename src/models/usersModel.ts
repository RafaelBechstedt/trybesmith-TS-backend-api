import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { IUser } from '../interfaces/IUser';
import { ILogin } from '../interfaces/ILogin';

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

async function login(username: string): Promise<ILogin | undefined> {
  const [[user]] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ?',
    [username],
  );
  return user as ILogin | undefined;
}

export default { addUser, login };