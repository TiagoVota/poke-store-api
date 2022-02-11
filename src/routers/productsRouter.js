import { Router } from 'express'

import * as productController from '../controllers/productController.js'

import authMiddleware from '../middlewares/authMiddleware.js'


const router = new Router()

router.get('', productController.getProducts)
// router.get('/:productId', productsController.getProduct)

// router.post('/:productId', authMiddleware, productsController.postProduct)


export default router
