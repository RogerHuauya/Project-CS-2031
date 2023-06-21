import {Router} from 'express'
import {authRequire} from '../middlewares/validateToken.js'
import {getBooks, getBook, createBook, updateBook, deleteBook} from '../controllers/books.controllers.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { createBookSchema } from '../schemas/book.schema.js'

const router = Router()

router.get('/books', authRequire, getBooks)
router.get('/books/:id', authRequire, getBook)
router.post(
    '/books', 
    authRequire, 
    validateSchema(createBookSchema),
    createBook)
router.delete('/books/:id', authRequire, deleteBook)
router.put('/books/:id', authRequire, updateBook)

export default router
