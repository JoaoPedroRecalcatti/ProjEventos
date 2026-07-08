import { Router } from "express"
import {
    buscarTodosTrabalhos,
    buscarTrabalhoPorID,
    criarTrabalho,
    alterarTrabalho,
    deletarTrabalho,
    listarTrabalhosPorUsuario
} from "../controladores/trabalhos.js"
import verificarToken from "../middleware/verificarToken.js"

const router = Router()

router.get("/trabalhos", buscarTodosTrabalhos)
router.get("/trabalhos/usuario/:idUsuario", listarTrabalhosPorUsuario)
router.get("/trabalhos/:id", buscarTrabalhoPorID)
router.post("/trabalhos", verificarToken, criarTrabalho)
router.put("/trabalhos/:id", alterarTrabalho)
router.delete("/trabalhos/:id", deletarTrabalho)

export default router
