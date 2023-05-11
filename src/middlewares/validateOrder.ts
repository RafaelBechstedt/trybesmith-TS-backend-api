import { Request, Response, NextFunction } from 'express';

async function validateOrders(req: Request, res: Response, next: NextFunction) {
  if (!req.body.productsIds) {
    return res.status(400).json({ message: '"productsIds" is required' });
  }
  if (!Array.isArray(req.body.productsIds)) {
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }
  if (req.body.productsIds.length === 0) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }
  next();
}

export default validateOrders;