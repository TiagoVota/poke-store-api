import * as orderService from '../services/orderService.js'


const postOrder = async (_, res, next) => {
	const { locals: { userId } } = res

	try {
		const order = await orderService.finalizeOrder({ userId })
		
		return res.status(201).send(order)

	} catch (error) {		
		next(error)
	}
}


export {
	postOrder,
}
