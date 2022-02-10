import * as productRepository from '../repositories/productRepository.js'
// import * as productSchema from '../schemas/productSchema.js'

// import { validationErrors } from '../validations/handleValidation.js'

// import SchemaError from '../errors/SchemaError.js'


const listProducts = async () => {
	const products = await productRepository.findProducts()

	return products
}


export {
	listProducts,
}
