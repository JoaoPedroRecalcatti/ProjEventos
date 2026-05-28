import Certificado from "../models/certificado.js"

const buscarTodosCertificados = async (req, res) => {
    try {
        const certificados = await Certificado.find()
        res.status(200).json(certificados)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao buscar certificados" })
    }
}

const buscarCertificadoPorID = async (req, res) => {
    try {
        const { id } = req.params
        const certificado = await Certificado.findById(id)
        if (!certificado) return res.status(404).json({ erro: true, mensagem: "Certificado não encontrado" })
        res.status(200).json(certificado)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao buscar certificado" })
    }
}

const criarCertificado = async (req, res) => {
    try {
        const novoCertificado = new Certificado(req.body)
        await novoCertificado.save()
        res.status(201).json({ erro: false, mensagem: "Certificado criado com sucesso" })
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao criar certificado" })
    }
}

const alterarCertificado = async (req, res) => {
    try {
        const { id } = req.params
        const certificado = await Certificado.findByIdAndUpdate(id, req.body, { new: true })
        if (!certificado) return res.status(404).json({ erro: true, mensagem: "Certificado não encontrado" })
        res.status(200).json(certificado)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao alterar certificado" })
    }
}

const deletarCertificado = async (req, res) => {
    try {
        const { id } = req.params
        const certificado = await Certificado.findByIdAndDelete(id)
        if (!certificado) return res.status(404).json({ erro: true, mensagem: "Certificado não encontrado" })
        res.status(200).json({ erro: false, mensagem: "Certificado deletado" })
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao deletar certificado" })
    }
}

export { buscarTodosCertificados, buscarCertificadoPorID, criarCertificado, alterarCertificado, deletarCertificado }
