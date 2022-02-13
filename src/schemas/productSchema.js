import joi from 'joi'


const pokeNameSchema = joi.object({
	pokeNameOrId: joi.alternatives().try(
		joi.string().min(4).max(11).required(),
		joi.object().required()
	)
}).length(1)

const postProductSchema = joi.object({
	productId: joi.object().required(),
	quantity: joi.number().integer().min(1).required(),
}).length(2)


export {
	pokeNameSchema,
	postProductSchema,
}
