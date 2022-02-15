import * as sessionRepository from '../repositories/sessionRepository.js'
import jwt from 'jsonwebtoken'
import AuthError from '../errors/AuthError.js'


const authUser = async ({ token }) => {

	try{
		const secretKey = process.env.JWT_SECRET
		const id = jwt.verify( token, secretKey )
		console.log(id)
	}catch(e){
		throw new AuthError(`'${token}' has invalid token syntax!`)
	}


	const session = await sessionRepository.findSessionByToken({ token })

	if (!session) throw new AuthError()
	const { user_id } = session

	return user_id
}


export {
	authUser,
}
