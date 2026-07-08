import { Router } from "express"
import {
    buscarTodosEventos,
    buscarEventoPorID,
    criarEvento,
    alterarEvento,
    deletarEvento,
    listarEventosPorUsuario
} from "../controladores/eventos.js"
import verificarToken from "../middleware/verificarToken.js"

const router = Router()

router.get("/eventos", buscarTodosEventos)
router.get("/eventos/usuario/:idUsuario", listarEventosPorUsuario)
router.get("/eventos/:id", buscarEventoPorID)
router.post("/eventos", verificarToken, criarEvento)
router.put("/eventos/:id", verificarToken, alterarEvento)
router.delete("/eventos/:id", verificarToken, deletarEvento)

export default router
