import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import tasks_route from './routes/books.routes.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser())


app.use('/auth', authRoutes);
app.use('/tasks', tasks_route);


export default app;