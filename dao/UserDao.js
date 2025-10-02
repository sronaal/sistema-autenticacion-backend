import { User } from "../models/User.js"

export class UserDao{


    registrarUsuario(usuario){


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
}

