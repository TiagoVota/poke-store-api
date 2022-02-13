import joi from 'joi'


const pokeNameSchema = joi.object({
	pokeName: joi.string().min(4).max(15).required(),
}).length(1)

const postProductSchema = joi.object({
	productId: joi.object().required(),
	quantity: joi.number().integer().min(1).required(),
}).length(2)


export {
	pokeNameSchema,
	postProductSchema,
}
