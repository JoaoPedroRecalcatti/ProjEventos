import { Router } from "express"
import {
    buscarTodosQRCodes,
    buscarQRCodePorID,
    criarQRCode,
    alterarQRCode,
    deletarQRCode
} from "../controladores/qrcodes.js"

const router = Router()

router.get("/qrcodes", buscarTodosQRCodes)
router.get("/qrcodes/:id", buscarQRCodePorID)
router.post("/qrcodes", criarQRCode)
router.put("/qrcodes/:id", alterarQRCode)
router.delete("/qrcodes/:id", deletarQRCode)

export default router
