const makeProductsIdsList = products => products.map(takeObjectId)
const takeObjectId = product => product.product_id


export {
	makeProductsIdsList,
}
