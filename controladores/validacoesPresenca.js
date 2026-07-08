import ValidarPresenca from "../models/validarPresenca.js"

const buscarTodasValidacoes = async (req, res) => {
    try {
        const validacoes = await ValidarPresenca.find()
            .populate("id_inscricao")
            .populate("id_organizador", "nome email tipo")
        res.status(200).json(validacoes)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao buscar validações de presença" })
    }
}

const buscarValidacaoPorID = async (req, res) => {
    try {
        const { id } = req.params
        const validacao = await ValidarPresenca.findById(id)
            .populate("id_inscricao")
            .populate("id_organizador", "nome email tipo")
        if (!validacao) return res.status(404).json({ erro: true, mensagem: "Validação não encontrada" })
        res.status(200).json(validacao)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao buscar validação" })
    }
}

const criarValidacao = async (req, res) => {
    try {
        if (req.usuario.tipo !== 'ORGANIZADOR') {
            console.log(`Permissao negada: usuario ${req.usuario.nome} (tipo: ${req.usuario.tipo}) tentou validar presenca`)
            return res.status(403).json({ erro: true, mensagem: "Apenas organizadores podem validar presenças" })
        }
        const idOrganizadorLogado = req.usuario.id
        const novaValidacao = new ValidarPresenca({ ...req.body, id_organizador: idOrganizadorLogado })
        await novaValidacao.save()
        res.status(201).json({ erro: false, mensagem: "Presença validada com sucesso" })
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao validar presença" })
    }
}

const alterarValidacao = async (req, res) => {
    try {
        if (req.usuario.tipo !== 'ORGANIZADOR') {
            console.log(`Permissao negada: usuario ${req.usuario.nome} (tipo: ${req.usuario.tipo}) tentou alterar validacao de presenca`)
            return res.status(403).json({ erro: true, mensagem: "Apenas organizadores podem alterar validações" })
        }
        const { id } = req.params
        const validacao = await ValidarPresenca.findByIdAndUpdate(id, req.body, { new: true })
        if (!validacao) return res.status(404).json({ erro: true, mensagem: "Validação não encontrada" })
        res.status(200).json(validacao)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao alterar validação" })
    }
}

const deletarValidacao = async (req, res) => {
    try {
        if (req.usuario.tipo !== 'ORGANIZADOR') {
            console.log(`Permissao negada: usuario ${req.usuario.nome} (tipo: ${req.usuario.tipo}) tentou deletar validacao de presenca`)
            return res.status(403).json({ erro: true, mensagem: "Apenas organizadores podem deletar validações" })
        }
        const { id } = req.params
        const validacao = await ValidarPresenca.findByIdAndDelete(id)
        if (!validacao) return res.status(404).json({ erro: true, mensagem: "Validação não encontrada" })
        res.status(200).json({ erro: false, mensagem: "Validação deletada" })
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao deletar validação" })
    }
}

export { buscarTodasValidacoes, buscarValidacaoPorID, criarValidacao, alterarValidacao, deletarValidacao }
