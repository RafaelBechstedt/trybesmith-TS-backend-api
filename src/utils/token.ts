import jwt, { SignOptions } from 'jsonwebtoken';
import { IUser } from '../interfaces/IUser';
import { ILogin } from '../interfaces/ILogin';

const secret: string = process.env.JWT_SECRET || 'secret';

const configJWT: SignOptions = {
  expiresIn: '7d',  
  algorithm: 'HS256',
};

const generateToken = (user: string | object | IUser | ILogin) => {
  const token = jwt.sign(user, secret, configJWT);
  return token;
};

export default { generateToken };