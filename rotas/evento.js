import { Router } from "express"
import {
    buscarTodosEventos,
    buscarEventoPorID,
    criarEvento,
    alterarEvento,
    deletarEvento
} from "../controladores/eventos.js"

const router = Router()

router.get("/eventos", buscarTodosEventos)
router.get("/eventos/:id", buscarEventoPorID)
router.post("/eventos", criarEvento)
router.put("/eventos/:id", alterarEvento)
router.delete("/eventos/:id", deletarEvento)

export default router
