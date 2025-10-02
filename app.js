import express from 'express'

import conectarDB from './conexion.js'
import config from './config.js'
import routes from './routes/routes.js'
const app = express()

app.use(config.configuraciones_server.ruta,routes)

conectarDB()


export default app