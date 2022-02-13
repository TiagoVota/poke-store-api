import joi from 'joi'


const signUpSchema = joi.object({
	username: joi.string().min(2).max(80).required(),
	email: joi.string().email({ tlds: {allow: false} }).required(),
	password: joi.string().min(5).max(80).required(),
	image: joi.string().required()
}).length(4)


const loginSchema = joi.object({
	email: joi.string().email({ tlds: {allow: false} }).required(),
	password: joi.string().min(5).max(80).required()
}).length(2)


export {
	signUpSchema,
	loginSchema,
}
