import AvaliacaoTrabalho from "../models/avaliacaoTrabalho.js"

const buscarTodasAvaliacoesTrabalho = async (req, res) => {
    try {
        const avaliacoes = await AvaliacaoTrabalho.find()
            .populate("id_trabalho", "titulo autores")
            .populate("id_avaliador", "nome email tipo")
        res.status(200).json(avaliacoes)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao buscar avaliações de trabalho" })
    }
}

const buscarAvaliacaoTrabalhoPorID = async (req, res) => {
    try {
        const { id } = req.params
        const avaliacao = await AvaliacaoTrabalho.findById(id)
            .populate("id_trabalho", "titulo autores")
            .populate("id_avaliador", "nome email tipo")
        if (!avaliacao) return res.status(404).json({ erro: true, mensagem: "Avaliação não encontrada" })
        res.status(200).json(avaliacao)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao buscar avaliação de trabalho" })
    }
}

const criarAvaliacaoTrabalho = async (req, res) => {
    try {
        const idAvaliadorLogado = req.usuario.id
        const novaAvaliacao = new AvaliacaoTrabalho({ ...req.body, id_avaliador: idAvaliadorLogado })
        await novaAvaliacao.save()
        res.status(201).json({ erro: false, mensagem: "Avaliação de trabalho criada com sucesso" })
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao criar avaliação de trabalho" })
    }
}

const alterarAvaliacaoTrabalho = async (req, res) => {
    try {
        const { id } = req.params
        const avaliacao = await AvaliacaoTrabalho.findByIdAndUpdate(id, req.body, { new: true })
        if (!avaliacao) return res.status(404).json({ erro: true, mensagem: "Avaliação não encontrada" })
        res.status(200).json(avaliacao)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao alterar avaliação de trabalho" })
    }
}

const deletarAvaliacaoTrabalho = async (req, res) => {
    try {
        const { id } = req.params
        const avaliacao = await AvaliacaoTrabalho.findByIdAndDelete(id)
        if (!avaliacao) return res.status(404).json({ erro: true, mensagem: "Avaliação não encontrada" })
        res.status(200).json({ erro: false, mensagem: "Avaliação de trabalho deletada" })
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao deletar avaliação de trabalho" })
    }
}

export { buscarTodasAvaliacoesTrabalho, buscarAvaliacaoTrabalhoPorID, criarAvaliacaoTrabalho, alterarAvaliacaoTrabalho, deletarAvaliacaoTrabalho }
