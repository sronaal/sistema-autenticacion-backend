import { DataTypes } from 'sequelize'

import conexion from '../conexion.js'


export const User = conexion.database.define('Usuario', {

    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: null
    },

    nombre: {
        type: DataTypes.STRING,
        allowNull: null
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: null
    },

    correo:{
        type: DataTypes.STRING,
        allowNull:null
    },
    password: {
        type: DataTypes.STRING
    }
})

