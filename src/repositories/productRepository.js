import connection from '../database/database.js'


const findProducts = async () => {
	const { mongoClient, db } = await connection()
		
	const products = await db.collection('products').find({}).toArray()
	await mongoClient.close()

	return products
}


const findProductByAtribute = async ({ key, value }) => {
	const { mongoClient, db } = await connection()

	const filter = {}
	filter[key] = value

	const product = await db.collection('products').findOne(filter)
	await mongoClient.close()

	if (!product) return null
	return product
}


const findManyProductsById = async ({ productsIds }) => {
	const { mongoClient, db } = await connection()

	const filter = { _id: { $in: productsIds } }

	const products = await db.collection('products').find(filter).toArray()
	await mongoClient.close()

	return products
}


export {
	findProducts,
	findProductByAtribute,
	findManyProductsById,
}
