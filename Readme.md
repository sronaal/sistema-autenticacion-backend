# 🔐 Sistema de Autenticación — Backend

Backend RESTful para el manejo de autenticación y autorización de usuarios.  
Este proyecto sirve de **API segura** para gestionar registro, login, recuperación de contraseñas, verificación por correo, roles, tokens JWT, etc.  
Pensado para integrarse fácilmente con cualquier frontend (React, Angular, Vue) o aplicaciones móviles.

---

## 🏷️ Badges

![Node.js](https://img.shields.io/badge/Node.js-16.x-green?logo=node.js&logoColor=white&style=flat)  
![Express](https://img.shields.io/badge/Express-^4.18.2-000000?logo=express&logoColor=white&style=flat)  
![JWT](https://img.shields.io/badge/JWT-enabled-orange?logo=jwt&logoColor=white&style=flat)  
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-47A248?logo=mongodb&logoColor=white&style=flat)  
![License MIT](https://img.shields.io/badge/license-MIT-green?style=flat)  

---

## ✨ Funcionalidades

- Registro de usuario con validaciones  
- Login con verificación de credenciales  
- Emisión de tokens **JWT** (acceso + refresh)  
- Rutas protegidas según rol / estado  
- Recuperación de contraseña (envío de email con token)  
- Verificación de cuenta (envío de email con link)  
- Middleware de autenticación  
- Manejo de errores estandarizado  
- Control de seguridad (CORS, rate limiting, Helmet)  

---

## 🛠 Tecnologías usadas

- **Node.js** + **Express** — servidor HTTP / framework  
- **TypeScript** — tipado estático  
- **MongoDB + Mongoose** — base de datos NoSQL  
- **bcryptjs** — hashing de contraseñas  
- **jsonwebtoken** — autenticación con JWT  
- **nodemailer** — envío de correos para verificación / recuperación  
- **dotenv** — gestión de variables de entorno  
- **helmet**, **cors** — seguridad en cabeceras y orígenes  
- **express-rate-limit** — protección contra ataques de fuerza bruta
