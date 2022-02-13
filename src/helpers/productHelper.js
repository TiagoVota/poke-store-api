import maxPokeNumber from '../utils/pokeNumber.js'


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

	console.log({ inputObject: { productId, type: typeof productId } })
	
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
	toCapitalizeCase,
	adjacentPokeNumbers,
	upsertProductList,
}

