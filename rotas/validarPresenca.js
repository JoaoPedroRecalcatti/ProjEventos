import { Router } from "express"
import {
    buscarTodasValidacoes,
    buscarValidacaoPorID,
    criarValidacao,
    alterarValidacao,
    deletarValidacao
} from "../controladores/validacoesPresenca.js"
import verificarToken from "../middleware/verificarToken.js"

const router = Router()

router.get("/validacoesPresenca", buscarTodasValidacoes)
router.get("/validacoesPresenca/:id", buscarValidacaoPorID)
router.post("/validacoesPresenca", verificarToken, criarValidacao)
router.put("/validacoesPresenca/:id", verificarToken, alterarValidacao)
router.delete("/validacoesPresenca/:id", verificarToken, deletarValidacao)

export default router
