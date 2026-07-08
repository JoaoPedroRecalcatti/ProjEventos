import Programacao from "../models/programacao.js"

const buscarTodasProgramacoes = async (req, res) => {
    try {
        const programacao = await Programacao.find().populate("id_evento", "nome data local")
        res.status(200).json(programacao)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao buscar programações" })
    }
}

const buscarProgramacaoPorID = async (req, res) => {
    try {
        const { id } = req.params
        const programacao = await Programacao.findById(id).populate("id_evento", "nome data local")
        if (!programacao) return res.status(404).json({ erro: true, mensagem: "Programação não encontrada" })
        res.status(200).json(programacao)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao buscar programação" })
    }
}

const criarProgramacao = async (req, res) => {
    try {
        if (req.usuario.tipo !== 'ORGANIZADOR') {
            console.log(`Permissao negada: usuario ${req.usuario.nome} (tipo: ${req.usuario.tipo}) tentou criar uma programacao`)
            return res.status(403).json({ erro: true, mensagem: "Apenas organizadores podem criar programações" })
        }
        const novaProgramacao = new Programacao(req.body)
        await novaProgramacao.save()
        res.status(201).json({ erro: false, mensagem: "Programação criada com sucesso" })
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao criar programação" })
    }
}

const alterarProgramacao = async (req, res) => {
    try {
        if (req.usuario.tipo !== 'ORGANIZADOR') {
            console.log(`Permissao negada: usuario ${req.usuario.nome} (tipo: ${req.usuario.tipo}) tentou alterar uma programacao`)
            return res.status(403).json({ erro: true, mensagem: "Apenas organizadores podem alterar programações" })
        }
        const { id } = req.params
        const programacao = await Programacao.findByIdAndUpdate(id, req.body, { new: true })
        if (!programacao) return res.status(404).json({ erro: true, mensagem: "Programação não encontrada" })
        res.status(200).json(programacao)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao alterar programação" })
    }
}

const deletarProgramacao = async (req, res) => {
    try {
        if (req.usuario.tipo !== 'ORGANIZADOR') {
            console.log(`Permissao negada: usuario ${req.usuario.nome} (tipo: ${req.usuario.tipo}) tentou deletar uma programacao`)
            return res.status(403).json({ erro: true, mensagem: "Apenas organizadores podem deletar programações" })
        }
        const { id } = req.params
        const programacao = await Programacao.findByIdAndDelete(id)
        if (!programacao) return res.status(404).json({ erro: true, mensagem: "Programação não encontrada" })
        res.status(200).json({ erro: false, mensagem: "Programação deletada" })
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao deletar programação" })
    }
}

export { buscarTodasProgramacoes, buscarProgramacaoPorID, criarProgramacao, alterarProgramacao, deletarProgramacao }
