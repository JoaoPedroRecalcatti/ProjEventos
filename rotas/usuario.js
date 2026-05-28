import { Router } from "express"
import {
    buscarTodosUsuarios,
    buscarUsuarioPorID,
    criarUsuario,
    alterarUsuario,
    deletarUsuario,
    loginUsuario
} from "../controladores/usuarios.js"
import verificarToken from "../middleware/verificarToken.js"

const router = Router()

router.post("/login", loginUsuario)

router.post("/usuarios", criarUsuario)
router.get("/usuarios", verificarToken, buscarTodosUsuarios)
router.get("/usuarios/:id", verificarToken, buscarUsuarioPorID)
router.put("/usuarios/:id", verificarToken, alterarUsuario)
router.delete("/usuarios/:id", verificarToken, deletarUsuario)

export default router
