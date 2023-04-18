
import {
    createPsycho,
    getPsycho} 
    from  "../controllers/psicologo.controller.js"
import {Router} from "express"


const router = Router();

router.post("/psicologo/createPsycho",createPsycho);
router.get("/psicologo/getPsycho",getPsycho);
export default router;