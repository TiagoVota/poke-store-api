import * as cartRepository from '../repositories/cartRepository.js'
import * as productRepository from '../repositories/productRepository.js'
import * as orderRepository from '../repositories/orderRepository.js'
import * as orderHelper from '../helpers/orderHelper.js'

import { findUserEmailByUserId } from '../controllers/userController.js'
import serverMiddlewareError from '../middlewares/serverMiddlewareError.js'

import NoCartError from '../errors/NoCartError.js'
import NoProductsError from '../errors/NoProductsError.js'
import AuthError from '../errors/AuthError.js'
import sgMail from '@sendgrid/mail'


const finalizeOrder = async ({ userId: user_id }) => {

	const email = await findUserEmailByUserId(user_id)
	if (!email) throw new AuthError('Email invalid!')

	const cart = await cartRepository.findCartByUserId({ user_id })
	if (!cart) throw new NoCartError(user_id)

	const { products } = cart
	if (products.length === 0) throw new NoProductsError()

	const productsIds = orderHelper.makeProductsIdsList(products)

	const productsList = await productRepository.findManyProductsById({ productsIds })

	const finalizeDate = Date.now()

	const order = await orderRepository.insertOrder({
		user_id,
		userEmail: email,
		products: productsList,
		finalize_date: finalizeDate,
	})
	const { insertedId: orderId } = order

	await cartRepository.deleteCartByUserId({ user_id })

	sgMail.setApiKey(process.env.SEND_GRID_API_KEY)

	const msg = {
		to: email,
		from: `${process.env.SENDER_EMAIL}`,
		subject: 'Your order summary at PokéStore',
		text:`
		Thank you for trusting PokéStore!
		Here is a summary of your order:
		${productsList}
		${finalizeDate}
		If you have any questions feel free to contact our support
		by replying to this email
		or opening a ticket in our store
		`
	}
	try{
		await sgMail.send(msg)
	}catch(e){
		serverMiddlewareError(e)
	}

	return {
		userId: user_id,
		userEmail: email,
		orderId,
		products: productsList,
		finalizeDate,
	}
}


export {
	finalizeOrder,
}
