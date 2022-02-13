import connection from '../database/database.js'


const findCartByUserId = async ({ user_id }) => {
	const { mongoClient, db } = await connection()

	const cart = await db.collection('carts').findOne({ user_id })
	await mongoClient.close()

	return cart
}


const insertUserCart = async ({ user_id }) => {
	const { mongoClient, db } = await connection()
	const initialProducts = []

	const cart = await db.collection('carts').insertOne({
		user_id,
		products: initialProducts
	})
	await mongoClient.close()

	const cartInfo = {
		_id: cart.insertedId,
		products: initialProducts,
	}

	return cartInfo
}


const updateCart = async ({ cart_id, products }) => {
	const { mongoClient, db } = await connection()

	const cart = await db.collection('carts').updateOne(
		{ _id: cart_id },
		{ $set: { products } }
	)
	await mongoClient.close()

	const cartInfo = {
		...cart,
		products,
	}

	return cartInfo
}




export {
	findCartByUserId,
	insertUserCart,
	updateCart,
}
