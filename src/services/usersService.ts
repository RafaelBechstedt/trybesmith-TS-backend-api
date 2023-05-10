import { IUser } from '../interfaces/IUser';
import usersModel from '../models/usersModel';
import token from '../utils/token';

async function addUser(user:IUser): Promise<string> {
  const newUser = await usersModel.addUser(user);
  const tokenKey = token.generateToken(newUser);
  return tokenKey;
}

async function login(username:string, password:string) {
  if (!username) {
    return { type: 'error1', message: '"username" is required' };
  }
  if (!password) {
    return { type: 'error2', message: '"password" is required' };
  }

  const user = await usersModel.login(username);
  if (!user || password !== user.password) {
    return { type: 'error3', message: 'Username or password invalid' };
  }
  const tokenPayload = {
    user: user.username,
    id: user.id,
  };
   
  const tokenKey = token.generateToken(tokenPayload);

  return { type: null, message: tokenKey };
}

export default { addUser, login };