import { Router } from "express"
import {
    buscarTodosFeedbacksAtividade,
    buscarFeedbackAtividadePorID,
    criarFeedbackAtividade,
    alterarFeedbackAtividade,
    deletarFeedbackAtividade
} from "../controladores/feedbacksAtividade.js"
import verificarToken from "../middleware/verificarToken.js"

const router = Router()

router.get("/feedbacksAtividade", buscarTodosFeedbacksAtividade)
router.get("/feedbacksAtividade/:id", buscarFeedbackAtividadePorID)
router.post("/feedbacksAtividade", verificarToken, criarFeedbackAtividade)
router.put("/feedbacksAtividade/:id", alterarFeedbackAtividade)
router.delete("/feedbacksAtividade/:id", deletarFeedbackAtividade)

export default router
