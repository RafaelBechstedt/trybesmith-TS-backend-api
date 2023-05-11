import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { IToken } from '../interfaces/IToken';

interface RequestWithUserRole extends Request {
  user?: IToken,
}

async function validateToken(req: RequestWithUserRole, res: Response, next: NextFunction) {
  try {
    const token: string | undefined = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const decoded = <IToken> jwt.verify(token, 'secret');
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

export default validateToken;