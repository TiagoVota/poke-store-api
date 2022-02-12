const errorsName = [
	'AuthError',
	'NoFoundPokemonError',
	'SchemaError',
]

const isPersonalizedError = errorName => errorsName.includes(errorName)


export {
	isPersonalizedError,
}
