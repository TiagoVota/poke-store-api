import * as productService from '../services/productService.js'
import connection from '../database/database.js'
import { ObjectId } from 'mongodb'

const getProductsInCart = async (req, res, next) => {
	try{
		const { mongoClient, db } = await connection()
		const userCart = await db.collection('carts').find( { user_id: res.locals.userId } ).toArray()
		if(userCart.length < 1){
			return res.status(404).send('Cart is empty!')
		}
		let arrayOfIds = []
		for(let i = 0; i < userCart[0].products.length; i++){
			arrayOfIds.push(userCart[0].products[i].product_id)
		}
		const products = await db.collection('products').find( { _id: { $in: arrayOfIds } } ).toArray()
		await mongoClient.close()
	
		return res.status(200).send(products)

	}
	catch (error) {
		next(error)
	}
}

export {
	getProductsInCart,
}
