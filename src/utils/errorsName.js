const errorsName = [
	'AuthError',
	'NoCartError',
	'NoFoundPokemonError',
	'NoProductsError',
	'SchemaError',
]

const isPersonalizedError = errorName => errorsName.includes(errorName)


export {
	isPersonalizedError,
}
