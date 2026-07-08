import { Router } from "express"
import {
    buscarTodosIngressos,
    buscarIngressoPorID,
    criarIngresso,
    alterarIngresso,
    deletarIngresso
} from "../controladores/ingressos.js"
import verificarToken from "../middleware/verificarToken.js"

const router = Router()

router.get("/ingressos", buscarTodosIngressos)
router.get("/ingressos/:id", buscarIngressoPorID)
router.post("/ingressos", verificarToken, criarIngresso)
router.put("/ingressos/:id", verificarToken, alterarIngresso)
router.delete("/ingressos/:id", verificarToken, deletarIngresso)

export default router
