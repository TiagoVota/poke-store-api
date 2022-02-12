import dotenv from 'dotenv'


const { NODE_ENV } = process.env

const paths = {
	'production': '.env'
}

const path = paths[NODE_ENV] || '.env.dev'
console.log(path)


dotenv.config({
	path
})
