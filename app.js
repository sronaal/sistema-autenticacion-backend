import express from 'express'

import conectarDB from './conexion.js'

const app = express()


conectarDB()


export default app