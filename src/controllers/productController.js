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
	const { params: { pokeNameOrId } } = req

	try {
		const product = await productService.findProduct({ pokeNameOrId })
		
		return res.status(200).send(product)

	} catch (error) {		
		next(error)
	}
}


const addUserProduct = async (req, res, next) => {
	const { params: { productId }, body } = req
	const { locals: { userId } } = res
	
	const productInfo = { ...body, productId }
	
	try {
		const product = await productService.addCartProduct({ userId, productInfo })
		
		return res.status(200).send(product)

	} catch (error) {		
		next(error)
	}
}


export {
	getProducts,
	getProduct,
	addUserProduct,
}
