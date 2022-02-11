import maxPokeNumber from '../utils/pokeNumber.js'


const toCapitalizeCase = (str) => {
	return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()
}


const adjacentPokeNumbers = (pokeNumber) => {
	const previousNum = Boolean(pokeNumber !== 1) ? pokeNumber - 1 : maxPokeNumber
	const nextNum = Boolean(maxPokeNumber !== pokeNumber) ? pokeNumber + 1 : 1

	return { previousNum, nextNum }
}




export {
	toCapitalizeCase,
	adjacentPokeNumbers,
}

