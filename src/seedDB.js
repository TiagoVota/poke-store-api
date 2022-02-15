import connection from './database/database.js'

import { pokemonsInfo } from '../populateMongodb.js'


const seedDB = async () => {
	const { mongoClient, db } = await connection()
	
	await db.collection('products').deleteMany()
	
	await db.collection('products').insertMany(pokemonsInfo)
	
	mongoClient.close({ safe: true })
}


seedDB()
