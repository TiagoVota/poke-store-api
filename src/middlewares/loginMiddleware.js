import { loginSchema } from '../schemas/authSchema.js'

const validateLogin = async (req, res, next) => {
	const validation = loginSchema.validate(req.body)
	if(validation.error){
		return res.sendStatus(422)
	}
	next()
}

export default validateLogin