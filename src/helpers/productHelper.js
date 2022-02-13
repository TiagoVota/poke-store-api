import { ObjectId } from 'mongodb'

import maxPokeNumber from '../utils/pokeNumber.js'


const makeKeyAndValue = (pokeNameOrId) => {
	const isIdString = Boolean(pokeNameOrId.length === 24)

	const [ key, value ] = isIdString
		? ['_id', new ObjectId(pokeNameOrId)]
		: ['pokemon', toCapitalizeCase(pokeNameOrId)]

	return { key, value }
}

const toCapitalizeCase = (str) => {
	return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()
}


const adjacentPokeNumbers = (pokeNumber) => {
	const previousNum = Boolean(pokeNumber !== 1) ? pokeNumber - 1 : maxPokeNumber
	const nextNum = Boolean(maxPokeNumber !== pokeNumber) ? pokeNumber + 1 : 1

	return { previousNum, nextNum }
}


const upsertProductList = ({ products, productId, quantity }) => {
	const newProduct = { product_id: productId, quantity }
	if (!products[0]) return [newProduct]

	const newProducts = [...products]
	
	const isProductInCart = newProducts.find((product, index) => {
		const isEqualId = Boolean(product.product_id.equals(productId))
		if (isEqualId) newProducts[index] = { ...product, quantity }

		return isEqualId
	})

	if (!isProductInCart) newProducts.push(newProduct)

	return newProducts
}


export {
	makeKeyAndValue,
	adjacentPokeNumbers,
	upsertProductList,
}

