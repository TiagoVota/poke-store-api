import { loginSchema } from '../schemas/authSchema.js'

const validateLogin = async (req, res, next) => {
	const validation = loginSchema.validate(req.body)
	if(validation.error){
		return res.status(422).send(validation.error)
	}
	next()
}

export default validateLogin
