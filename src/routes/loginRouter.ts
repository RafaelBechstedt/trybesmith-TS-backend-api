import express from 'express';
import usersController from '../controllers/usersController';

const loginRouter = express.Router();

loginRouter.post('/', usersController.login);

export default loginRouter;