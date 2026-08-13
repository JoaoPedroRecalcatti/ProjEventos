import Evento from "../models/evento.js"

const buscarTodosEventos = async (req, res) => {
    try {
        const eventos = await Evento.find().populate("id_organizador", "nome email tipo")
        res.status(200).json(eventos)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao buscar eventos" })
    }
}

const buscarEventoPorID = async (req, res) => {
    try {
        const { id } = req.params
        const evento = await Evento.findById(id).populate("id_organizador", "nome email tipo")
        if (!evento) return res.status(404).json({ erro: true, mensagem: "Evento não encontrado" })
        res.status(200).json(evento)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao buscar evento" })
    }
}

const criarEvento = async (req, res) => {
    try {
        if (req.usuario.tipo !== 'ORGANIZADOR') {
            console.log(`Permissao negada: usuario ${req.usuario.nome} (tipo: ${req.usuario.tipo}) tentou criar um evento`)
            return res.status(403).json({ erro: true, mensagem: "Apenas organizadores podem criar eventos" })
        }
        const idUsuarioLogado = req.usuario.id
        const novoEvento = new Evento({ ...req.body, id_organizador: idUsuarioLogado })
        await novoEvento.save()
        res.status(201).json({ erro: false, mensagem: "Evento criado com sucesso" })
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao criar evento" })
    }
}

const alterarEvento = async (req, res) => {
    try {
        if (req.usuario.tipo !== 'ORGANIZADOR') {
            console.log(`Permissao negada: usuario ${req.usuario.nome} (tipo: ${req.usuario.tipo}) tentou alterar um evento`)
            return res.status(403).json({ erro: true, mensagem: "Apenas organizadores podem alterar eventos" })
        }
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
        if (req.usuario.tipo !== 'ORGANIZADOR') {
            console.log(`Permissao negada: usuario ${req.usuario.nome} (tipo: ${req.usuario.tipo}) tentou deletar um evento`)
            return res.status(403).json({ erro: true, mensagem: "Apenas organizadores podem deletar eventos" })
        }
        const { id } = req.params
        const evento = await Evento.findByIdAndDelete(id)
        if (!evento) return res.status(404).json({ erro: true, mensagem: "Evento não encontrado" })
        res.status(200).json({ erro: false, mensagem: "Evento deletado" })
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao deletar evento" })
    }
}

const listarEventosPorUsuario = async (req, res) => {
    try {
        const { idUsuario } = req.params
        const eventos = await Evento.find({ id_organizador: idUsuario }).populate("id_organizador", "nome email tipo")
        res.status(200).json(eventos)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao listar eventos do usuario" })
    }
}

export { buscarTodosEventos, buscarEventoPorID, criarEvento, alterarEvento, deletarEvento, listarEventosPorUsuario }
