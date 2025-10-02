import { Router } from 'express'

import { iniciarSesion, registrarUsuario, changePassword, forgetPassword } from '../controllers/authController.js'
import { validacionFormRegistrarUsuario, validaciones } from '../middleware/validators/validaciones.js'

const routes = Router()

routes.post('/login', iniciarSesion)
routes.post('/register', validacionFormRegistrarUsuario, validaciones, registrarUsuario)
routes.post('/forget', forgetPassword)
routes.post('/change-password', changePassword)

export default routes
