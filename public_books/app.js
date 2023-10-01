import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import Book from './models/books.model.js';

const app = express();

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const corsOptions = { origin: true, credentials: true }

app.use(cookieParser())
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan('dev'));

app.get("/", getAllBooks);

export default app;
