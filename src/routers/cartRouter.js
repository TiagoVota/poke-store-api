import { Router } from 'express'

import * as cartController from '../controllers/cartController.js'

import authMiddleware from '../middlewares/authMiddleware.js'


const router = new Router()

router.use(authMiddleware)

router.get('', cartController.getProductsInCart)


export default router
