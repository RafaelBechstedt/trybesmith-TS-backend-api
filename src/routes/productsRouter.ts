import express from 'express';
import productsController from '../controllers/productsController';

const productsRouter = express.Router();

productsRouter.post('/', productsController.addProduct);

export default productsRouter;