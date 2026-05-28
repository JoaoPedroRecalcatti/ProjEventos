import Trabalho from "../models/trabalho.js"

const buscarTodosTrabalhos = async (req, res) => {
    try {
        const trabalhos = await Trabalho.find()
        res.status(200).json(trabalhos)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao buscar trabalhos" })
    }
}

const buscarTrabalhoPorID = async (req, res) => {
    try {
        const { id } = req.params
        const trabalho = await Trabalho.findById(id)
        if (!trabalho) return res.status(404).json({ erro: true, mensagem: "Trabalho não encontrado" })
        res.status(200).json(trabalho)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao buscar trabalho" })
    }
}

const criarTrabalho = async (req, res) => {
    try {
        const novoTrabalho = new Trabalho(req.body)
        await novoTrabalho.save()
        res.status(201).json({ erro: false, mensagem: "Trabalho criado com sucesso" })
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao criar trabalho" })
    }
}

const alterarTrabalho = async (req, res) => {
    try {
        const { id } = req.params
        const trabalho = await Trabalho.findByIdAndUpdate(id, req.body, { new: true })
        if (!trabalho) return res.status(404).json({ erro: true, mensagem: "Trabalho não encontrado" })
        res.status(200).json(trabalho)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao alterar trabalho" })
    }
}

const deletarTrabalho = async (req, res) => {
    try {
        const { id } = req.params
        const trabalho = await Trabalho.findByIdAndDelete(id)
        if (!trabalho) return res.status(404).json({ erro: true, mensagem: "Trabalho não encontrado" })
        res.status(200).json({ erro: false, mensagem: "Trabalho deletado" })
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao deletar trabalho" })
    }
}

export { buscarTodosTrabalhos, buscarTrabalhoPorID, criarTrabalho, alterarTrabalho, deletarTrabalho }
