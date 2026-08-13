import RelatorioFeedback from "../models/relatorioFeedback.js"

const buscarTodosRelatorios = async (req, res) => {
    try {
        const relatorios = await RelatorioFeedback.find()
            .populate("id_evento", "nome data local")
            .populate("id_organizador", "nome email tipo")
        res.status(200).json(relatorios)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao buscar relatórios de feedback" })
    }
}

const buscarRelatorioPorID = async (req, res) => {
    try {
        const { id } = req.params
        const relatorio = await RelatorioFeedback.findById(id)
            .populate("id_evento", "nome data local")
            .populate("id_organizador", "nome email tipo")
        if (!relatorio) return res.status(404).json({ erro: true, mensagem: "Relatório não encontrado" })
        res.status(200).json(relatorio)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao buscar relatório" })
    }
}

const criarRelatorio = async (req, res) => {
    try {
        if (req.usuario.tipo !== 'ORGANIZADOR') {
            console.log(`Permissao negada: usuario ${req.usuario.nome} (tipo: ${req.usuario.tipo}) tentou gerar relatorio de feedback`)
            return res.status(403).json({ erro: true, mensagem: "Apenas organizadores podem gerar relatórios de feedback" })
        }
        const idOrganizadorLogado = req.usuario.id
        const novoRelatorio = new RelatorioFeedback({ ...req.body, id_organizador: idOrganizadorLogado })
        await novoRelatorio.save()
        res.status(201).json({ erro: false, mensagem: "Relatório de feedback criado com sucesso" })
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao criar relatório" })
    }
}

const alterarRelatorio = async (req, res) => {
    try {
        if (req.usuario.tipo !== 'ORGANIZADOR') {
            console.log(`Permissao negada: usuario ${req.usuario.nome} (tipo: ${req.usuario.tipo}) tentou alterar relatorio de feedback`)
            return res.status(403).json({ erro: true, mensagem: "Apenas organizadores podem alterar relatórios" })
        }
        const { id } = req.params
        const relatorio = await RelatorioFeedback.findByIdAndUpdate(id, req.body, { new: true })
        if (!relatorio) return res.status(404).json({ erro: true, mensagem: "Relatório não encontrado" })
        res.status(200).json(relatorio)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao alterar relatório" })
    }
}

const deletarRelatorio = async (req, res) => {
    try {
        if (req.usuario.tipo !== 'ORGANIZADOR') {
            console.log(`Permissao negada: usuario ${req.usuario.nome} (tipo: ${req.usuario.tipo}) tentou deletar relatorio de feedback`)
            return res.status(403).json({ erro: true, mensagem: "Apenas organizadores podem deletar relatórios" })
        }
        const { id } = req.params
        const relatorio = await RelatorioFeedback.findByIdAndDelete(id)
        if (!relatorio) return res.status(404).json({ erro: true, mensagem: "Relatório não encontrado" })
        res.status(200).json({ erro: false, mensagem: "Relatório deletado" })
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao deletar relatório" })
    }
}

export { buscarTodosRelatorios, buscarRelatorioPorID, criarRelatorio, alterarRelatorio, deletarRelatorio }
