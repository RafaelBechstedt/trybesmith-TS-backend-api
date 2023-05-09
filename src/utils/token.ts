import jwt, { SignOptions } from 'jsonwebtoken';
import { IUser } from '../interfaces/IUser';

const secret: string = process.env.JWT_SECRET || 'secret';

const configJWT: SignOptions = {
  expiresIn: '7d',  
  algorithm: 'HS256',
};

const generateToken = (user: IUser) => {
  const token = jwt.sign(user, secret, configJWT);
  return token;
};

export default { generateToken };