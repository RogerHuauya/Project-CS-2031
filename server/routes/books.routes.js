

import { Router } from "express";
import {
  createBook,
  deleteBook,
  getBook,
  getBooks,
  updateBook,
} from "../controllers/books.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createBookSchema } from "../schemas/book.schema.js";

const router = Router();

router.get("/", auth, getBooks);

router.post("/", auth, validateSchema(createBookSchema), createBook);

router.get("/:id", auth, getBook);

router.put("/:id", auth, updateBook);

router.delete("/:id", auth, deleteBook);

export default router;
