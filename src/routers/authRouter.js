import { Router } from 'express'
import { validateSignUp } from '../middlewares/signupMiddleware.js'
import validateLogin from '../middlewares/loginMiddleware.js'
import { postSignUp, postLogin } from '../controllers/userController.js'


const router = new Router()

router.post('/login', validateLogin, postLogin)
router.post('/sign-up', validateSignUp, postSignUp)

// router.delete('/logout', authController.logout)


export default router
