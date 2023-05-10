import express from 'express';
import productsRouter from './routes/productsRouter';
import usersRouter from './routes/usersRouter';
import ordersRouter from './routes/ordersRouter';
import loginRouter from './routes/loginRouter';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);
app.use('/login', loginRouter);

export default app;
