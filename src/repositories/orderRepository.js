import connection from '../database/database.js'


const insertOrder = async ({ user_id, products, finalize_date }) => {
	const { mongoClient, db } = await connection()

	const insertObject = { user_id, products, finalize_date }

	const order = await db.collection('orders').insertOne(insertObject)
	await mongoClient.close()

	return order
}


export {
	insertOrder,
}
