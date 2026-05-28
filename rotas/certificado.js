import { Router } from "express"
import {
    buscarTodosCertificados,
    buscarCertificadoPorID,
    criarCertificado,
    alterarCertificado,
    deletarCertificado
} from "../controladores/certificados.js"

const router = Router()

router.get("/certificados", buscarTodosCertificados)
router.get("/certificados/:id", buscarCertificadoPorID)
router.post("/certificados", criarCertificado)
router.put("/certificados/:id", alterarCertificado)
router.delete("/certificados/:id", deletarCertificado)

export default router
