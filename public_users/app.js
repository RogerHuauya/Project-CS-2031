import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import User from './models/user.model.js';

const app = express();

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const corsOptions = { origin: true, credentials: true }

app.use(cookieParser())
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan('dev'));

app.get("/", getAllUsers);

export default app;
