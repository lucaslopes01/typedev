import express from 'express'
import cors from 'cors'
import { isaAuthenticated } from './middlewares/auth.middleware' 
 import { authenticate } from './controllers/auth.controller'
import { getUser } from './controllers/users.controlle'
 

 export const app = express()
app.use(express.json())
app.use(cors())

app.post('/auth', authenticate )

app.get('/users', isaAuthenticated, getUser)