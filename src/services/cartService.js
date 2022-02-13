import * as cartRepository from '../repositories/cartRepository.js'


const takeCartInfoByUserId = async ({ user_id }) => {
	let cart = await cartRepository.findCartByUserId({ user_id })
	if (!cart) cart = await cartRepository.insertUserCart({ user_id })

	const cartInfo = {
		cartId: cart._id,
		products: cart.products
	}

	return cartInfo
}


export {
	takeCartInfoByUserId,
}
