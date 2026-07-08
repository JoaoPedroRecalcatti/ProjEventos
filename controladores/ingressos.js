import Ingresso from "../models/ingresso.js"

const buscarTodosIngressos = async (req, res) => {
    try {
        const ingressos = await Ingresso.find().populate("id_evento", "nome data local")
        res.status(200).json(ingressos)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao buscar ingressos" })
    }
}

const buscarIngressoPorID = async (req, res) => {
    try {
        const { id } = req.params
        const ingresso = await Ingresso.findById(id).populate("id_evento", "nome data local")
        if (!ingresso) return res.status(404).json({ erro: true, mensagem: "Ingresso não encontrado" })
        res.status(200).json(ingresso)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao buscar ingresso" })
    }
}

const criarIngresso = async (req, res) => {
    try {
        if (req.usuario.tipo !== 'ORGANIZADOR') {
            console.log(`Permissao negada: usuario ${req.usuario.nome} (tipo: ${req.usuario.tipo}) tentou criar um ingresso`)
            return res.status(403).json({ erro: true, mensagem: "Apenas organizadores podem criar ingressos" })
        }
        const novoIngresso = new Ingresso(req.body)
        await novoIngresso.save()
        res.status(201).json({ erro: false, mensagem: "Ingresso criado com sucesso" })
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao criar ingresso" })
    }
}

const alterarIngresso = async (req, res) => {
    try {
        if (req.usuario.tipo !== 'ORGANIZADOR') {
            console.log(`Permissao negada: usuario ${req.usuario.nome} (tipo: ${req.usuario.tipo}) tentou alterar um ingresso`)
            return res.status(403).json({ erro: true, mensagem: "Apenas organizadores podem alterar ingressos" })
        }
        const { id } = req.params
        const ingresso = await Ingresso.findByIdAndUpdate(id, req.body, { new: true })
        if (!ingresso) return res.status(404).json({ erro: true, mensagem: "Ingresso não encontrado" })
        res.status(200).json(ingresso)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao alterar ingresso" })
    }
}

const deletarIngresso = async (req, res) => {
    try {
        if (req.usuario.tipo !== 'ORGANIZADOR') {
            console.log(`Permissao negada: usuario ${req.usuario.nome} (tipo: ${req.usuario.tipo}) tentou deletar um ingresso`)
            return res.status(403).json({ erro: true, mensagem: "Apenas organizadores podem deletar ingressos" })
        }
        const { id } = req.params
        const ingresso = await Ingresso.findByIdAndDelete(id)
        if (!ingresso) return res.status(404).json({ erro: true, mensagem: "Ingresso não encontrado" })
        res.status(200).json({ erro: false, mensagem: "Ingresso deletado" })
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao deletar ingresso" })
    }
}

export { buscarTodosIngressos, buscarIngressoPorID, criarIngresso, alterarIngresso, deletarIngresso }
