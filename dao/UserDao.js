import { User } from "../models/User.js"

class UserDao {

    constructor() { }

    registrarUsuario(usuario) {


        return new Promise((resolve, reject) => {

            User.create(usuario)
                .then(() => {

                    return resolve("Usuario Creado")
                })
                .catch((error) => {

                    return reject(error)
                })

        })
    }

    buscarEmail(correo) {

        return User.findOne({ where: { correo: correo } })
    }
}


export default UserDao