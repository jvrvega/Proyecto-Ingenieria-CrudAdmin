import express from "express"
import morgan from "morgan"
import cors from "cors"
import {PORT} from "./config.js"


import rutasAdministrador from "./routes/administrador.routes.js"
import rutasPsicologo from './routes/psicologo.routes.js'


// configuraciones 
const app = express();
app.set("port",PORT);
app.use(express.urlencoded({ extended: false }));


//middlewares
app.use(morgan("dev"));
app.use(cors());


//routes 
app.use(rutasAdministrador);
app.use(rutasPsicologo);

// exports
export default app; 