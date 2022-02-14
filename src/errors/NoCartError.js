class NoCartError extends Error {
	constructor(message) {
		super(message)
		this.name = 'NoCartError'
		this.message = `Cart not found by user id "${message}"!`
		this.status = 404
	}
}


export default NoCartError
