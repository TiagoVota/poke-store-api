import * as productService from '../services/productService.js'


const getProducts = async (_, res, next) => {
	try {
		const products = await productService.listProducts()
		
		return res.status(200).send(products)

	} catch (error) {		
		next(error)
	}
}


const getProduct = async (req, res, next) => {
	const { params: { pokeName } } = req

	try {
		const product = await productService.findProduct({ pokeName })
		
		return res.status(200).send(product)

	} catch (error) {		
		next(error)
	}
}


export {
	getProducts,
	getProduct,
}
