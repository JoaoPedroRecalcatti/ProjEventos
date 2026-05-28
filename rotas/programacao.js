import { Router } from "express"
import {
    buscarTodasProgramacoes,
    buscarProgramacaoPorID,
    criarProgramacao,
    alterarProgramacao,
    deletarProgramacao
} from "../controladores/programacao.js"

const router = Router()

router.get("/programacao", buscarTodasProgramacoes)
router.get("/programacao/:id", buscarProgramacaoPorID)
router.post("/programacao", criarProgramacao)
router.put("/programacao/:id", alterarProgramacao)
router.delete("/programacao/:id", deletarProgramacao)

export default router
