import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, ".env"),
});

console.log("Cargando variables desde:", __dirname);

export default {
  port: process.env.PORT || 3000,
  configuraciones_server: {
    ruta: "/api/v1/",
    secret_key_dev: "DFA2z7j29k0X6HbH7b4TyBfc4FlFDsDd09GYP2VvuRE800m3Zw",
  },

  database: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
};
