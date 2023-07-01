import { Router } from "express";
import {
  createBook,
  deleteBook,
  getBook,
  getBooks,
  updateBook,
} from "../controllers/books.controllers.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createBookSchema } from "../schemas/book.schema.js";

const router = Router();

router.get("/books", auth, getBooks);

router.post("/books", auth, validateSchema(createBookSchema), createBook);

router.get("/books/:id", auth, getBook);

router.put("/books/:id", auth, updateBook);

router.delete("/books/:id", auth, deleteBook);

export default router;
