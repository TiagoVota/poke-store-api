import joi from 'joi'


const pokeNameSchema = joi.object({
	pokeName: joi.string().min(4).max(15).required(),
}).length(1)


export {
	pokeNameSchema,
}
