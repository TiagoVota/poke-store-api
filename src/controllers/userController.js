import bcrypt from 'bcrypt'
import connection from '../database/database.js'
import {v4 as uuid} from 'uuid'

const postSignUp = async(req, res) => {
    try{
        const find = req.body.email
        const { db } = await connection()
        const existingUser = await db.collection('users').findOne( {email: find} )
        console.log(existingUser)
        if(existingUser){
            return res.sendStatus(409)
        }
        const hashedPassword = bcrypt.hashSync(req.body.password, 10) //nao ta lendo env
        await db.collection('users').insertOne({... req.body, password: hashedPassword})
        res.sendStatus(201)
    }catch(e){
        console.log(e)
        res.sendStatus(500)
    }
}

const postLogin = async(req, res) => {
    try{
        const { db } = await connection()
        const user = await db.collection('users').findOne({email: req.body.email})
        if(!user){
            res.sendStatus(404)
            return
        }
        if (bcrypt.compareSync(req.body.password, user.password)) {
            const token = uuid()
            await db.collection('sessions').insertOne({ user_id: user._id, token })
            return res.status(200).send(token)
        }
        else{
            res.sendStatus(401)
        }
    }catch(e){
        console.log(e)
        res.sendStatus(500)
    }
}

export { postSignUp, postLogin }