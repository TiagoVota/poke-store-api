import { Router } from 'express'

// import * as productsController from '../controllers/productsController.js'

import authMiddleware from '../middlewares/authMiddleware.js'


const router = new Router()

// router.get('', productsController.getProducts)
// router.get('/:productId', productsController.getProduct)

// router.post('/:productId', authMiddleware, productsController.postProduct)


export default router
