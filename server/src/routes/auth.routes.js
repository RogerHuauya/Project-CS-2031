import {Router} from 'express'
import {logout, login, register, profile} from '../controllers/auth.controllers.js'
import {authRequire} from '../middlewares/validateToken.js'
import {validateSchema} from '../middlewares/validator.middleware.js'
import { registerSchema, loginSchema } from '../schemas/auth.schema.js'

const router = Router()

router.post('/register', validateSchema(registerSchema), register)

router.post('/login', validateSchema(loginSchema), login)

router.post('/logout', logout)

router.get('/profile', authRequire, profile)


// router.get('/search', search)


export default router

