import express from 'express'
import cors from 'cors'
import './mongodb.js'
import { authRouter } from './routers/auth.route.js'
import { usersRouter } from './routers/users.route.js'
 

 export const app = express()
app.use(express.json())
app.use(cors())

app.use('/auth', authRouter)

app.use('/users', usersRouter)