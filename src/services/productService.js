import { ObjectId } from 'mongodb'

import * as cartService from './cartService.js'
import * as productRepository from '../repositories/productRepository.js'
import * as cartRepository from '../repositories/cartRepository.js'
import * as productSchema from '../schemas/productSchema.js'
import * as productHelper from '../helpers/productHelper.js'

import { validationErrors } from '../validations/handleValidation.js'

import SchemaError from '../errors/SchemaError.js'
import NoFoundPokemonError from '../errors/NoFoundPokemonError.js'


const listProducts = async () => {
	const products = await productRepository.findProducts()

	return products
}


const findProduct = async ({ pokeNameOrId }) => {
	const { key, value } = productHelper.makeKeyAndValue(pokeNameOrId)

	const nameErrors = validationErrors({ 
		objectToValid: { pokeNameOrId: value },
		objectValidation: productSchema.pokeNameSchema
	})

	if (nameErrors) throw new SchemaError(nameErrors)

	const product = await productRepository.findProductByAtribute({ key, value })
	if (!product && key !== '_id') throw new NoFoundPokemonError(value)
	const { number: pokeNumber } = product

	const adjacentPokemons = await findAdjacentPokemons({ pokeNumber })

	const finalProduct = {
		...product,
		adjacentPokemons
	}

	return finalProduct
}

const findAdjacentPokemons = async ({ pokeNumber }) => {
	const { previousNum, nextNum } = productHelper.adjacentPokeNumbers(pokeNumber)

	const previousPoke = await productRepository.findProductByAtribute({
		key: 'number',
		value: previousNum
	})
	const nextPoke = await productRepository.findProductByAtribute({
		key: 'number',
		value: nextNum
	})

	return {
		previous: {
			pokemon: previousPoke?.pokemon || null,
			number: previousPoke?.number || null,
		},
		next: {
			pokemon: nextPoke?.pokemon || null,
			number: nextPoke?.number || null,
		},
	}
}


const addCartProduct = async ({ userId: user_id, productInfo }) => {
	productInfo.productId = new ObjectId(productInfo.productId)

	const addProductErrors = validationErrors({ 
		objectToValid: productInfo,
		objectValidation: productSchema.postProductSchema
	})
	if (addProductErrors) throw new SchemaError(addProductErrors)
	const { productId, quantity } = productInfo

	const { cartId, products } = await cartService.takeCartInfoByUserId({
		user_id
	})

	const newProducts = productHelper.upsertProductList({
		products,
		productId,
		quantity,
	})

	const cart = await cartRepository.updateCart({
		cart_id: cartId,
		products: newProducts
	})

	return cart
}


export {
	listProducts,
	findProduct,
	addCartProduct,
}
