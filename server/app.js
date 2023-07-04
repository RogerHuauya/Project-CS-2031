// import express from 'express';
// import morgan from 'morgan';
// import cors from 'cors';
// import authRoutes from './routes/auth.routes.js';
// import cookieParser from 'cookie-parser';
// import booksRoutes from "./routes/books.routes.js";

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(morgan('dev'));
// app.use(cookieParser())

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.use('/auth', authRoutes);
// app.use('/books', booksRoutes);

// export default app;

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import booksRoutes from "./routes/books.routes.js";

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173', 
  credentials: true, 
}

app.use(cookieParser())
app.use(cors(corsOptions)); 
app.use(express.json());
app.use(morgan('dev'));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/auth', authRoutes);
app.use('/books', booksRoutes);

export default app;