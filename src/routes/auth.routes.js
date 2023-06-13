import {Router} from 'express'
import {logout, login, register, profile, search} from '../controllers/auth.controllers.js'


const router = Router()

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)

router.get('/search', search)
router.get('/profile', profile)


export default router