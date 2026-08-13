import { Router } from "express"
import {
    buscarTodasAvaliacoesTrabalho,
    buscarAvaliacaoTrabalhoPorID,
    criarAvaliacaoTrabalho,
    alterarAvaliacaoTrabalho,
    deletarAvaliacaoTrabalho
} from "../controladores/avaliacoesTrabalho.js"
import verificarToken from "../middleware/verificarToken.js"

const router = Router()

router.get("/avaliacoesTrabalho", buscarTodasAvaliacoesTrabalho)
router.get("/avaliacoesTrabalho/:id", buscarAvaliacaoTrabalhoPorID)
router.post("/avaliacoesTrabalho", verificarToken, criarAvaliacaoTrabalho)
router.put("/avaliacoesTrabalho/:id", alterarAvaliacaoTrabalho)
router.delete("/avaliacoesTrabalho/:id", deletarAvaliacaoTrabalho)

export default router
