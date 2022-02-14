
/*
const pokemonsInfo = [
*/

db.products.insertMany(
	[
		{
			number: 1,
			pokemon: 'Bulbasaur',
			image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
			price: 10,
			types: [
				'Grass',
				'Poison',
			],
		},
		{
			number: 2,
			pokemon: 'Ivysaur',
			image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
			price: 50,
			types: [
				'Grass',
				'Poison',
			],
		},
		{
			number: 3,
			pokemon: 'Venusaur',
			image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
			price: 300,
			types: [
				'Grass',
				'Poison',
			],
		},
		{
			number: 4,
			pokemon: 'Charmander',
			image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
			price: 10,
			types: [
				'Fire',
			],
		},
		{
			number: 5,
			pokemon: 'Charmeleon',
			image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png',
			price: 50,
			types: [
				'Fire',
			],
		},
		{
			number: 6,
			pokemon: 'Charizard',
			image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
			price: 300,
			types: [
				'Fire',
				'Flying',
			],
		},
		{
			number: 7,
			pokemon: 'Squirtle',
			image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png',
			price: 10,
			types: [
				'Water',
			],
		},
		{
			number: 8,
			pokemon: 'Wartortle',
			image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png',
			price: 50,
			types: [
				'Water',
			],
		},
		{
			number: 9,
			pokemon: 'Blastoise',
			image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png',
			price: 300,
			types: [
				'Water',
			],
		},
		{
			number: 25,
			pokemon: 'Pikachu',
			image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png',
			price: 100,
			types: [
				'Electric',
			],
		}
	]
)
/*
]


const types = [
	'Grass',
	'Poison',
	'Fire',
	'Flying',
	'Water',
	'Electric'
]
*/