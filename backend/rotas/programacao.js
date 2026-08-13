import { Router } from "express"
import {
    buscarTodasProgramacoes,
    buscarProgramacaoPorID,
    criarProgramacao,
    alterarProgramacao,
    deletarProgramacao
} from "../controladores/programacao.js"
import verificarToken from "../middleware/verificarToken.js"

const router = Router()

router.get("/programacao", buscarTodasProgramacoes)
router.get("/programacao/:id", buscarProgramacaoPorID)
router.post("/programacao", verificarToken, criarProgramacao)
router.put("/programacao/:id", verificarToken, alterarProgramacao)
router.delete("/programacao/:id", verificarToken, deletarProgramacao)

export default router
