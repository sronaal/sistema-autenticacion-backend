import { Router } from 'express'
import { iniciarSesion, registrarUsuario, changePassword, forgetPassword} from '../controllers/authController.js'

const routes = Router()


routes.post('/login', iniciarSesion)
routes.post('/register', registrarUsuario)
routes.post('/forget', changePassword)
routes.post('/change-password', forgetPassword)

export default routes