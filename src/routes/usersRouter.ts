import express from 'express';
import usersController from '../controllers/usersController';

const usersRouter = express.Router();

usersRouter.post('/', usersController.addUser);

export default usersRouter;