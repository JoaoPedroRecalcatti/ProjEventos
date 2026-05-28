import { Router } from "express"
import {
    buscarTodasInscricoes,
    buscarInscricaoPorID,
    criarInscricao,
    alterarInscricao,
    deletarInscricao
} from "../controladores/inscricoes.js"

const router = Router()

router.get("/inscricoes", buscarTodasInscricoes)
router.get("/inscricoes/:id", buscarInscricaoPorID)
router.post("/inscricoes", criarInscricao)
router.put("/inscricoes/:id", alterarInscricao)
router.delete("/inscricoes/:id", deletarInscricao)

export default router
