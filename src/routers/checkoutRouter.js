import { Router } from 'express'

import * as orderController from '../controllers/orderController.js'

import authMiddleware from '../middlewares/authMiddleware.js'


const router = new Router()

router.use(authMiddleware)

router.post('', orderController.postOrder)


export default router
