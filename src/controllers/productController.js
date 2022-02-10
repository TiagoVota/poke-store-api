import * as productService from '../services/productService.js'


const getProducts = async (_, res, next) => {
	try {
		const products = await productService.listProducts()
		
		return res.status(200).send(products)

	} catch (error) {		
		next(error)
	}
}


export {
	getProducts,
}
