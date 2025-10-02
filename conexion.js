import { Sequelize } from 'sequelize'
import config from './config.js'

const database = new Sequelize(config.database.database, config.database.user, config.database.password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
})



const conectarDB = () => {

    database.authenticate()
        .then(() => {
            console.log("CONEXION DB EXITOSA")

            //return database.sync({ force: true })
        })
        .catch((error) => {

            console.log(`Error: ${error}`)
        })
}

export default {
    conectarDB,
    database
}