import { Router } from "express"
import {
    buscarTodasAvaliacoes,
    buscarAvaliacaoPorID,
    criarAvaliacao,
    alterarAvaliacao,
    deletarAvaliacao,
    listarAvaliacoesPorUsuario
} from "../controladores/avaliacoes.js"
import verificarToken from "../middleware/verificarToken.js"

const router = Router()

router.get("/avaliacoes", buscarTodasAvaliacoes)
router.get("/avaliacoes/usuario/:idUsuario", listarAvaliacoesPorUsuario)
router.get("/avaliacoes/:id", buscarAvaliacaoPorID)
router.post("/avaliacoes", verificarToken, criarAvaliacao)
router.put("/avaliacoes/:id", alterarAvaliacao)
router.delete("/avaliacoes/:id", deletarAvaliacao)

export default router
