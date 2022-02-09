import { Router } from 'express'

// import * as checkoutController from '../controllers/checkoutController.js'

import authMiddleware from '../middlewares/authMiddleware.js'


const router = new Router()

router.use(authMiddleware)

// router.post('', checkoutController.postOrder)


export default router
