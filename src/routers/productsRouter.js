import { Router } from 'express'

import * as productController from '../controllers/productController.js'

import authMiddleware from '../middlewares/authMiddleware.js'


const router = new Router()

router.get('', productController.getProducts)
router.get('/:pokeName', productController.getProduct)

router.put('/:productId', authMiddleware, productController.addUserProduct)


export default router
