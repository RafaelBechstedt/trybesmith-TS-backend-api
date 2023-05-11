import express from 'express';
import ordersController from '../controllers/ordersController';
import validateToken from '../middlewares/validateToken';
import validateOrder from '../middlewares/validateOrder';

const ordersRouter = express.Router();

ordersRouter.get('/', ordersController.getAll);
ordersRouter.post('/', validateToken, validateOrder, ordersController.createOrder);

export default ordersRouter;