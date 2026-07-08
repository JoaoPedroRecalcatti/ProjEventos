import { Router } from "express"
import {
    buscarTodosRelatorios,
    buscarRelatorioPorID,
    criarRelatorio,
    alterarRelatorio,
    deletarRelatorio
} from "../controladores/relatoriosFeedback.js"
import verificarToken from "../middleware/verificarToken.js"

const router = Router()

router.get("/relatoriosFeedback", buscarTodosRelatorios)
router.get("/relatoriosFeedback/:id", buscarRelatorioPorID)
router.post("/relatoriosFeedback", verificarToken, criarRelatorio)
router.put("/relatoriosFeedback/:id", verificarToken, alterarRelatorio)
router.delete("/relatoriosFeedback/:id", verificarToken, deletarRelatorio)

export default router
