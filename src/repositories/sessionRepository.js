import connection from '../database/database.js'
import { ObjectId } from 'mongodb'


const findSessionByToken = async ({ token }) => {
	const { mongoClient, db } = await connection()

	const session = await db.collection('sessions').findOne({ _id: new ObjectId(token) })
	mongoClient.close()
	
	if (!session) return null
	return session
}


export {
	findSessionByToken,
}
