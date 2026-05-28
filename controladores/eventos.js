import Evento from "../models/evento.js"

const buscarTodosEventos = async (req, res) => {
    try {
        const eventos = await Evento.find()
        res.status(200).json(eventos)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao buscar eventos" })
    }
}

const buscarEventoPorID = async (req, res) => {
    try {
        const { id } = req.params
        const evento = await Evento.findById(id)
        if (!evento) return res.status(404).json({ erro: true, mensagem: "Evento não encontrado" })
        res.status(200).json(evento)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao buscar evento" })
    }
}

const criarEvento = async (req, res) => {
    try {
        const novoEvento = new Evento(req.body)
        await novoEvento.save()
        res.status(201).json({ erro: false, mensagem: "Evento criado com sucesso" })
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao criar evento" })
    }
}

const alterarEvento = async (req, res) => {
    try {
        const { id } = req.params
        const evento = await Evento.findByIdAndUpdate(id, req.body, { new: true })
        if (!evento) return res.status(404).json({ erro: true, mensagem: "Evento não encontrado" })
        res.status(200).json(evento)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao alterar evento" })
    }
}

const deletarEvento = async (req, res) => {
    try {
        const { id } = req.params
        const evento = await Evento.findByIdAndDelete(id)
        if (!evento) return res.status(404).json({ erro: true, mensagem: "Evento não encontrado" })
        res.status(200).json({ erro: false, mensagem: "Evento deletado" })
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao deletar evento" })
    }
}

export { buscarTodosEventos, buscarEventoPorID, criarEvento, alterarEvento, deletarEvento }
