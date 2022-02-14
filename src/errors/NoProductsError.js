class NoProductsError extends Error {
	constructor(message) {
		super(message)
		this.name = 'NoProductsError'
		this.message = 'User cart is empty!'
		this.status = 403
	}
}


export default NoProductsError
