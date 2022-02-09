import cors from 'cors'
import express from 'express'

import healthRouter from './routers/healthRouter.js'
import authRouter from './routers/authRouter.js'
import productsRouter from './routers/productsRouter.js'
import cartRouter from './routers/cartRouter.js'
import checkoutRouter from './routers/checkoutRouter.js'

import backMiddlewareError from './middlewares/backMiddlewareError.js'
import serverMiddlewareError from './middlewares/serverMiddlewareError.js'


const app = express()

app.use(cors())
app.use(express.json())

app.use('/health', healthRouter)
app.use('/auth', authRouter)
app.use('/products', productsRouter)
app.use('/cart', cartRouter)
app.use('/checkout', checkoutRouter)

app.use(backMiddlewareError)
app.use(serverMiddlewareError)


export default app
