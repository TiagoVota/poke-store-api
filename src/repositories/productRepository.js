import connection from '../database/database.js'


const findProducts = async () => {
	const { mongoClient, db } = await connection()
		
	const products = await db.collection('products').find({}).toArray()
	await mongoClient.close()

	return products
}


export {
	findProducts,
}
