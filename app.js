import express from 'express'

import conexion from './conexion.js'
import config from './config.js'
import routes from './routes/routes.js'
const app = express()

app.use(config.configuraciones_server.ruta,routes)

conexion.conectarDB()


export default app