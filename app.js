import express from 'express'
import cors from 'cors'

import conexion from './conexion.js'
import config from './config.js'
import routes from './routes/routes.js'

const app = express()
conexion.conectarDB()

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(config.configuraciones_server.ruta, routes)



export default app