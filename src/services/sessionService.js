import * as sessionRepository from '../repositories/sessionRepository.js'
import jwt from 'jsonwebtoken'
import AuthError from '../errors/AuthError.js'


const authUser = async ({ token }) => {

	try{
		const secretKey = process.env.JWT_SECRET
		const sessionId = jwt.verify( token, secretKey )
		const session = await sessionRepository.findSessionById(sessionId.id)
		if (!session) throw new AuthError()
		const { user_id } = session
	
		return user_id
	}catch(e){
		throw new AuthError(`'${token}' has invalid token syntax!`)
	}



}


export {
	authUser,
}
