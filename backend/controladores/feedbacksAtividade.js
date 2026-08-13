import FeedbackAtividade from "../models/feedbackAtividade.js"

const buscarTodosFeedbacksAtividade = async (req, res) => {
    try {
        const feedbacks = await FeedbackAtividade.find()
            .populate("id_programacao", "titulo horario")
            .populate("id_usuario", "nome email tipo")
        res.status(200).json(feedbacks)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao buscar feedbacks de atividade" })
    }
}

const buscarFeedbackAtividadePorID = async (req, res) => {
    try {
        const { id } = req.params
        const feedback = await FeedbackAtividade.findById(id)
            .populate("id_programacao", "titulo horario")
            .populate("id_usuario", "nome email tipo")
        if (!feedback) return res.status(404).json({ erro: true, mensagem: "Feedback não encontrado" })
        res.status(200).json(feedback)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao buscar feedback de atividade" })
    }
}

const criarFeedbackAtividade = async (req, res) => {
    try {
        const idUsuarioLogado = req.usuario.id
        const novoFeedback = new FeedbackAtividade({ ...req.body, id_usuario: idUsuarioLogado })
        await novoFeedback.save()
        res.status(201).json({ erro: false, mensagem: "Feedback de atividade criado com sucesso" })
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao criar feedback de atividade" })
    }
}

const alterarFeedbackAtividade = async (req, res) => {
    try {
        const { id } = req.params
        const feedback = await FeedbackAtividade.findByIdAndUpdate(id, req.body, { new: true })
        if (!feedback) return res.status(404).json({ erro: true, mensagem: "Feedback não encontrado" })
        res.status(200).json(feedback)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao alterar feedback de atividade" })
    }
}

const deletarFeedbackAtividade = async (req, res) => {
    try {
        const { id } = req.params
        const feedback = await FeedbackAtividade.findByIdAndDelete(id)
        if (!feedback) return res.status(404).json({ erro: true, mensagem: "Feedback não encontrado" })
        res.status(200).json({ erro: false, mensagem: "Feedback de atividade deletado" })
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao deletar feedback de atividade" })
    }
}

export { buscarTodosFeedbacksAtividade, buscarFeedbackAtividadePorID, criarFeedbackAtividade, alterarFeedbackAtividade, deletarFeedbackAtividade }
