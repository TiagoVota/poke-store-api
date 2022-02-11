class NoFoundPokemonError extends Error {
	constructor(message) {
		super(message)
		this.name = 'NoFoundPokemonError'
		this.message = `No found '${message}' pokemon!`
		this.status = 404
	}
}


export default NoFoundPokemonError
