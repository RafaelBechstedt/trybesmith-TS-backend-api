import { Request, Response } from 'express';
import { IUser } from '../interfaces/IUser';
import usersService from '../services/usersService';
import { ILogin } from '../interfaces/ILogin';

async function addUser(req: Request, res: Response) {
  const user = req.body as IUser;
  const token = await usersService.addUser(user);
  return res.status(201).json({ token });
}

async function login(req: Request, res: Response) {
  const { username, password } = req.body as ILogin;
  const { type, message } = await usersService.login(username, password);
  if (type === 'error1') return res.status(400).send({ message });
  if (type === 'error2') return res.status(400).send({ message });
  if (type === 'error3') return res.status(401).send({ message });

  return res.status(200).json({ token: message });
}

export default { addUser, login };