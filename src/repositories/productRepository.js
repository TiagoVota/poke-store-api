import connection from '../database/database.js'
import { ObjectId } from 'mongodb'


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


export {
	findProducts,
	findProductByAtribute,
}
