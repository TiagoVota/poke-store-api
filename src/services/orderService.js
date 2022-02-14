import * as cartRepository from '../repositories/cartRepository.js'
import * as productRepository from '../repositories/productRepository.js'
import * as orderRepository from '../repositories/orderRepository.js'
import * as orderHelper from '../helpers/orderHelper.js'

import NoCartError from '../errors/NoCartError.js'
import NoProductsError from '../errors/NoProductsError.js'


const finalizeOrder = async ({ userId: user_id }) => {
	const cart = await cartRepository.findCartByUserId({ user_id })
	if (!cart) throw new NoCartError(user_id)

	const { products } = cart
	if (products.length === 0) throw new NoProductsError()

	const productsIds = orderHelper.makeProductsIdsList(products)

	const productsList = await productRepository.findManyProductsById({ productsIds })

	const finalizeDate = Date.now()

	const order = await orderRepository.insertOrder({
		user_id,
		products: productsList,
		finalize_date: finalizeDate,
	})
	const { insertedId: orderId } = order

	await cartRepository.deleteCartByUserId({ user_id })

	return {
		userId: user_id,
		orderId,
		products: productsList,
		finalizeDate,
	}
}


export {
	finalizeOrder,
}
