import { Router } from "express"
import {
    buscarTodasInscricoes,
    buscarInscricaoPorID,
    criarInscricao,
    alterarInscricao,
    deletarInscricao,
    listarInscricoesPorUsuario
} from "../controladores/inscricoes.js"
import verificarToken from "../middleware/verificarToken.js"

const router = Router()

router.get("/inscricoes", buscarTodasInscricoes)
router.get("/inscricoes/usuario/:idUsuario", listarInscricoesPorUsuario)
router.get("/inscricoes/:id", buscarInscricaoPorID)
router.post("/inscricoes", verificarToken, criarInscricao)
router.put("/inscricoes/:id", alterarInscricao)
router.delete("/inscricoes/:id", deletarInscricao)

export default router
