import express from 'express';
import productsController from '../controllers/productsController';

const productsRouter = express.Router();

productsRouter.post('/', productsController.addProduct);
productsRouter.get('/', productsController.getAll);

export default productsRouter;