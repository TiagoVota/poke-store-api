import './setup.js'
import app from './app.js'


const { PORT } = process.env || 5000 // porta nao ta rodando


app.listen(PORT, () => console.log(`Magic happens at port ${PORT}!`))
