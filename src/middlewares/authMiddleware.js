import * as sessionService from '../services/sessionService.js'
import { loginSchema } from '../schemas/authSchema.js'


const authMiddleware = async (req, res, next) => {
	const { headers: { authorization } } = req
	const token = authorization?.replace('Bearer ', '')

	try {
		const userId = await sessionService.authUser({ token })
	
		res.locals.userId = userId
		
		next()
		
	} catch (error) {
		next(error)
	}
}

const validateLogin = async (req, res, next) => {
	const validation = loginSchema.validate(req.body)
	if(validation.error){
		return res.sendStatus(422)
	}
	next()
}


export { authMiddleware, validateLogin }
