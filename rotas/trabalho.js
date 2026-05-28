import { Router } from "express"
import {
    buscarTodosTrabalhos,
    buscarTrabalhoPorID,
    criarTrabalho,
    alterarTrabalho,
    deletarTrabalho
} from "../controladores/trabalhos.js"

const router = Router()

router.get("/trabalhos", buscarTodosTrabalhos)
router.get("/trabalhos/:id", buscarTrabalhoPorID)
router.post("/trabalhos", criarTrabalho)
router.put("/trabalhos/:id", alterarTrabalho)
router.delete("/trabalhos/:id", deletarTrabalho)

export default router
