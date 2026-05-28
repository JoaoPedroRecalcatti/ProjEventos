import Programacao from "../models/programacao.js"

const buscarTodasProgramacoes = async (req, res) => {
    try {
        const programacao = await Programacao.find()
        res.status(200).json(programacao)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao buscar programações" })
    }
}

const buscarProgramacaoPorID = async (req, res) => {
    try {
        const { id } = req.params
        const programacao = await Programacao.findById(id)
        if (!programacao) return res.status(404).json({ erro: true, mensagem: "Programação não encontrada" })
        res.status(200).json(programacao)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao buscar programação" })
    }
}

const criarProgramacao = async (req, res) => {
    try {
        const novaProgramacao = new Programacao(req.body)
        await novaProgramacao.save()
        res.status(201).json({ erro: false, mensagem: "Programação criada com sucesso" })
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao criar programação" })
    }
}

const alterarProgramacao = async (req, res) => {
    try {
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
        const { id } = req.params
        const programacao = await Programacao.findByIdAndDelete(id)
        if (!programacao) return res.status(404).json({ erro: true, mensagem: "Programação não encontrada" })
        res.status(200).json({ erro: false, mensagem: "Programação deletada" })
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao deletar programação" })
    }
}

export { buscarTodasProgramacoes, buscarProgramacaoPorID, criarProgramacao, alterarProgramacao, deletarProgramacao }
