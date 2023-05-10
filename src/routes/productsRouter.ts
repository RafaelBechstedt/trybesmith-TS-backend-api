import express from 'express';
import productsController from '../controllers/productsController';
import validateProduct from '../middlewares/validateProduct';

const productsRouter = express.Router();

productsRouter.post(
  '/',
  validateProduct.validateName, 
  validateProduct.validateAmount, 
  productsController.addProduct,
);
productsRouter.get('/', productsController.getAll);

export default productsRouter;