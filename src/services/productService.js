import * as productRepository from '../repositories/productRepository.js'
import * as productSchema from '../schemas/productSchema.js'
import * as productHelper from '../helpers/productHelper.js'

import { validationErrors } from '../validations/handleValidation.js'

import SchemaError from '../errors/SchemaError.js'
import NoFoundPokemonError from '../errors/NoFoundPokemonError.js'


const listProducts = async () => {
	const products = await productRepository.findProducts()

	return products
}


const findProduct = async ({ pokeName }) => {
	pokeName = productHelper.toCapitalizeCase(pokeName)

	const nameErrors = validationErrors({ 
		objectToValid: { pokeName },
		objectValidation: productSchema.pokeNameSchema
	})

	if (nameErrors) throw new SchemaError(nameErrors)

	const product = await productRepository.findProductByAtribute({
		key: 'pokemon',
		value: pokeName
	})
	if (!product) throw new NoFoundPokemonError(pokeName)
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


export {
	listProducts,
	findProduct,
}
