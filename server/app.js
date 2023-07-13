import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import booksRoutes from "./routes/books.routes.js";

const app = express();

const corsOptions = { origin: true, credentials: true }

app.use(cookieParser())
app.use(cors(corsOptions)); 
app.use(express.json());
app.use(morgan('dev'));

("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/auth', authRoutes);
app.use('/books', booksRoutes);

export default app;