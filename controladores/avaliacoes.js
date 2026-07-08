import Avaliacao from "../models/avaliacao.js"

const buscarTodasAvaliacoes = async (req, res) => {
    try {
        const avaliacoes = await Avaliacao.find()
            .populate("id_usuario", "nome email tipo")
            .populate("id_evento", "nome data local")
        res.status(200).json(avaliacoes)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao buscar avaliações" })
    }
}

const buscarAvaliacaoPorID = async (req, res) => {
    try {
        const { id } = req.params
        const avaliacao = await Avaliacao.findById(id)
            .populate("id_usuario", "nome email tipo")
            .populate("id_evento", "nome data local")
        if (!avaliacao) return res.status(404).json({ erro: true, mensagem: "Avaliação não encontrada" })
        res.status(200).json(avaliacao)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao buscar avaliação" })
    }
}

const criarAvaliacao = async (req, res) => {
    try {
        const idUsuarioLogado = req.usuario.id
        const novaAvaliacao = new Avaliacao({ ...req.body, id_usuario: idUsuarioLogado })
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

const listarAvaliacoesPorUsuario = async (req, res) => {
    try {
        const { idUsuario } = req.params
        const avaliacoes = await Avaliacao.find({ id_usuario: idUsuario })
            .populate("id_usuario", "nome email tipo")
            .populate("id_evento", "nome data local")
        res.status(200).json(avaliacoes)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao listar avaliações do usuario" })
    }
}

export { buscarTodasAvaliacoes, buscarAvaliacaoPorID, criarAvaliacao, alterarAvaliacao, deletarAvaliacao, listarAvaliacoesPorUsuario }
