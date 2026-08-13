import Inscricao from "../models/inscricao.js"

const buscarTodasInscricoes = async (req, res) => {
    try {
        const inscricoes = await Inscricao.find()
            .populate("id_usuario", "nome email tipo")
            .populate("id_evento", "nome data local")
        res.status(200).json(inscricoes)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao buscar inscrições" })
    }
}

const buscarInscricaoPorID = async (req, res) => {
    try {
        const { id } = req.params
        const inscricao = await Inscricao.findById(id)
            .populate("id_usuario", "nome email tipo")
            .populate("id_evento", "nome data local")
        if (!inscricao) return res.status(404).json({ erro: true, mensagem: "Inscrição não encontrada" })
        res.status(200).json(inscricao)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao buscar inscrição" })
    }
}

const criarInscricao = async (req, res) => {
    try {
        const idUsuarioLogado = req.usuario.id
        const novaInscricao = new Inscricao({ ...req.body, id_usuario: idUsuarioLogado })
        await novaInscricao.save()
        res.status(201).json({ erro: false, mensagem: "Inscrição criada com sucesso" })
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao criar inscrição" })
    }
}

const alterarInscricao = async (req, res) => {
    try {
        const { id } = req.params
        const inscricao = await Inscricao.findByIdAndUpdate(id, req.body, { new: true })
        if (!inscricao) return res.status(404).json({ erro: true, mensagem: "Inscrição não encontrada" })
        res.status(200).json(inscricao)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao alterar inscrição" })
    }
}

const deletarInscricao = async (req, res) => {
    try {
        const { id } = req.params
        const inscricao = await Inscricao.findByIdAndDelete(id)
        if (!inscricao) return res.status(404).json({ erro: true, mensagem: "Inscrição não encontrada" })
        res.status(200).json({ erro: false, mensagem: "Inscrição deletada" })
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao deletar inscrição" })
    }
}

const listarInscricoesPorUsuario = async (req, res) => {
    try {
        const { idUsuario } = req.params
        const inscricoes = await Inscricao.find({ id_usuario: idUsuario })
            .populate("id_usuario", "nome email tipo")
            .populate("id_evento", "nome data local")
        res.status(200).json(inscricoes)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao listar inscrições do usuario" })
    }
}

export { buscarTodasInscricoes, buscarInscricaoPorID, criarInscricao, alterarInscricao, deletarInscricao, listarInscricoesPorUsuario }
