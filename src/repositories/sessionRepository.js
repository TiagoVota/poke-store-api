import connection from '../database/database.js'
import { ObjectId } from 'mongodb'


const findSessionById = async (pureId) => {
	const { mongoClient, db } = await connection()

	const session = await db.collection('sessions').findOne({ _id: new ObjectId(pureId) })
	mongoClient.close()
	
	if (!session) return null
	return session
}


export {
	findSessionById,
}
