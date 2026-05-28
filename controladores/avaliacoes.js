import Avaliacao from "../models/avaliacao.js"

const buscarTodasAvaliacoes = async (req, res) => {
    try {
        const avaliacoes = await Avaliacao.find()
        res.status(200).json(avaliacoes)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao buscar avaliações" })
    }
}

const buscarAvaliacaoPorID = async (req, res) => {
    try {
        const { id } = req.params
        const avaliacao = await Avaliacao.findById(id)
        if (!avaliacao) return res.status(404).json({ erro: true, mensagem: "Avaliação não encontrada" })
        res.status(200).json(avaliacao)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao buscar avaliação" })
    }
}

const criarAvaliacao = async (req, res) => {
    try {
        const novaAvaliacao = new Avaliacao(req.body)
        await novaAvaliacao.save()
        res.status(201).json({ erro: false, mensagem: "Avaliação criada com sucesso" })
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao criar avaliação" })
    }
}

const alterarAvaliacao = async (req, res) => {
    try {
        const { id } = req.params
        const avaliacao = await Avaliacao.findByIdAndUpdate(id, req.body, { new: true })
        if (!avaliacao) return res.status(404).json({ erro: true, mensagem: "Avaliação não encontrada" })
        res.status(200).json(avaliacao)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao alterar avaliação" })
    }
}

const deletarAvaliacao = async (req, res) => {
    try {
        const { id } = req.params
        const avaliacao = await Avaliacao.findByIdAndDelete(id)
        if (!avaliacao) return res.status(404).json({ erro: true, mensagem: "Avaliação não encontrada" })
        res.status(200).json({ erro: false, mensagem: "Avaliação deletada" })
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao deletar avaliação" })
    }
}

export { buscarTodasAvaliacoes, buscarAvaliacaoPorID, criarAvaliacao, alterarAvaliacao, deletarAvaliacao }
