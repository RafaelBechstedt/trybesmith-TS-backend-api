import express from 'express';
import productsRouter from './routes/productsRouter';
import usersRouter from './routes/usersRouter';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', usersRouter);

export default app;
