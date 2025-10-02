import UserDao from '../dao/UserDao.js'
import {generarHashPassword, validarContraseñaHash} from '../helpers/bcypt.js'

const userDao = new UserDao()

import { request, response } from 'express'



export const iniciarSesion = (req = request, res = response) => {

}


export const registrarUsuario = async (req = request, res = response) => {

    try {

        const { nombre, apellido, correo, password } = req.body
        
        const findUser = await userDao.buscarEmail(correo)
        if (findUser) return res.status(302).json({ "msg": `El correo ${correo} ya se encuentra registrado` })

        const hashPassword = generarHashPassword(password)
        const usuarioObject = {
            nombre,
            apellido,
            correo,
            hashPassword
        }

        
        let usuario = await userDao.registrarUsuario(usuarioObject)

        return res.status(201).json({ usuario })

    } catch (error) {

        return res.status(500).json({ error })
    }
}

export const forgetPassword = (req = request, res = response) => {

}

export const changePassword = (req = request, res = response) => {


}