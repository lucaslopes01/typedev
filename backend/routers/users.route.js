import { Router } from "express";
import { isaAuthenticated } from './middlewares/auth.middleware' 
import { getUser } from './controllers/users.controlle'

export const usersRouter = Router()

usersRouter.use(isaAuthenticated)

usersRouter.get('/' , getUser)
