import { Router } from "express"
import {
    buscarTodosCertificados,
    buscarCertificadoPorID,
    criarCertificado,
    alterarCertificado,
    deletarCertificado,
    listarCertificadosPorUsuario
} from "../controladores/certificados.js"
import verificarToken from "../middleware/verificarToken.js"

const router = Router()

router.get("/certificados", buscarTodosCertificados)
router.get("/certificados/usuario/:idUsuario", listarCertificadosPorUsuario)
router.get("/certificados/:id", buscarCertificadoPorID)
router.post("/certificados", verificarToken, criarCertificado)
router.put("/certificados/:id", verificarToken, alterarCertificado)
router.delete("/certificados/:id", verificarToken, deletarCertificado)

export default router
