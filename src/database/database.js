import { MongoClient } from 'mongodb'


const {
	MONGO_URI,
	MONGO_NAME,
} = process.env //nao esta lendo env

const connection = async () => {
	const mongoClient = new MongoClient('mongodb://localhost:27017')
	await mongoClient.connect()
	
	const db = mongoClient.db('poke_store')

	return { mongoClient, db }
}


export default connection
