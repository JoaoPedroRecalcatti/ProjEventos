import { Router } from "express"
import {
    buscarTodasAvaliacoes,
    buscarAvaliacaoPorID,
    criarAvaliacao,
    alterarAvaliacao,
    deletarAvaliacao
} from "../controladores/avaliacoes.js"

const router = Router()

router.get("/avaliacoes", buscarTodasAvaliacoes)
router.get("/avaliacoes/:id", buscarAvaliacaoPorID)
router.post("/avaliacoes", criarAvaliacao)
router.put("/avaliacoes/:id", alterarAvaliacao)
router.delete("/avaliacoes/:id", deletarAvaliacao)

export default router
