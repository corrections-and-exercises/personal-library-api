import express from 'express';

import bookRouter from './routers/book.js';
import userRouter from './routers/user.js';
import './db/index.js';
import { errorHandler } from './middlewares/errorHandler.js';
import morgan from 'morgan';

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/users', userRouter);
app.use('/books', bookRouter);

app.use(errorHandler);

app.listen(port, () =>
    console.log(`Server is listening on http://localhost:${port}`)
);
