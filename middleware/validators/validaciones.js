import { body, validationResult } from "express-validator";


export const validacionFormRegistrarUsuario = [

    body('nombre').notEmpty().withMessage('El nombre es requerido').trim().escape(),

    body('apellido').notEmpty().withMessage('El apellido es requerido')
    .trim().escape(),

    body('email').notEmpty().withMessage('El correo electronico es requerido').isEmail().withMessage('El correo electrónico es inválido')
    .trim().escape().normalizeEmail(),

    body('password').isLength({min: 3}).withMessage('La contraseña debe tener minimo 3 caracteres')
    .trim().escape()
]





export const validaciones = (req, res, next) => {

    const errores = validationResult(req)

    if (!errores.isEmpty()){
        const extraerErrores = errores.array().map(err => ({
            [err.path]: err.msg
        }));

        return res.status(422).json({
            errores: extraerErrores
        })
    }

    next();
}