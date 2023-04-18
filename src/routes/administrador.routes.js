
import {
    crearAdministrador,
    buscarAdministradores,
    buscarAdministrador,
    eliminarAdministrador,
    actualizarAdministrador,
    psicoNoValidados,
    psicoValidados} 
    from  "../controllers/administrador.controllers.js"

import {Router} from "express"


const router = Router();

router.post("/administrador/createAdmin",crearAdministrador);
router.get("/administrador/get",buscarAdministradores);
router.get("/administrador/getAdmin/:id",buscarAdministrador);
router.delete("/administrador/deleteAdmin/:id", eliminarAdministrador);
router.put("/administrador/update/:id",actualizarAdministrador);
router.get("/administrador/getPsycho", psicoNoValidados);
router.get("/administrador/PsychoValidate", psicoValidados)

export default router;