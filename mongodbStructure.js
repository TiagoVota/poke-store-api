const collections = [
	'sessions',
	'users',
	'products',
	'types',
	'carts',
	'checkout'
]


const sessionDocument = {
	user_id: 'this is an ObjectId from user',
	token: 'this is an uuid token'
}

const userDocument = {
	name: 'username string',
	email: 'user email',
	password: 'hashed password',
	image: 'user image by url'
}

const productDocument = {
	name: 'pokémon name',
	image: 'pokémon image by url',
	price: 'pokémon price',
	types_id: [
		'type id from types, is an ObjectId',
		'type id from types, is an ObjectId',
	]
}

const typeDocument = {
	name: 'type name'
}

const cartDocument = {
	user_id: 'this is an ObjectId from user',
	products: [
		{
			product_id: 'product id from products, is an ObjectId',
			quantity: 'number of products'
		},
		{
			product_id: 'product id from products, is an ObjectId',
			quantity: 'number of products'
		}
	]
}

const checkoutDocument = {
	user_id: 'this is an ObjectId from user',
	products: [
		{
			product_id: 'product id from products, is an ObjectId',
			quantity: 'number of products'
		},
		{
			product_id: 'product id from products, is an ObjectId',
			quantity: 'number of products'
		}
	],
	date: 'finalize order date in timestamp'
}
