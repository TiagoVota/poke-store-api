import './setup.js'
import app from './app.js'


const { PORT } = process.env || 5000 // porta nao ta rodando


app.listen(5000, () => console.log('Magic happens at port 5000!'))
