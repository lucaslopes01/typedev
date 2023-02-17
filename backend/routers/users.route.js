import { Router } from "express";
import { isaAuthenticated } from '../middlewares/auth.middleware.js' 
import { getUser } from '../controllers/users.controlle.js'

export const usersRouter = Router()

usersRouter.use(isaAuthenticated)

usersRouter.get('/' , getUser)
