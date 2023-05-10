import express from 'express';
import usersController from '../controllers/usersController';
import validateUser from '../middlewares/validateUser';

const usersRouter = express.Router();

usersRouter.post(
  '/',
  validateUser.validateUsername,
  validateUser.validatePassword,
  validateUser.validateLevel,
  validateUser.validateVocation,
  usersController.addUser,
);

export default usersRouter;