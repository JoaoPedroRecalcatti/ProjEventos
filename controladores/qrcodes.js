import QRCode from "../models/qrcode.js"

const buscarTodosQRCodes = async (req, res) => {
    try {
        const qrcodes = await QRCode.find().populate("id_inscricao")
        res.status(200).json(qrcodes)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao buscar qrcodes" })
    }
}

const buscarQRCodePorID = async (req, res) => {
    try {
        const { id } = req.params
        const qrcode = await QRCode.findById(id).populate("id_inscricao")
        if (!qrcode) return res.status(404).json({ erro: true, mensagem: "QRCode não encontrado" })
        res.status(200).json(qrcode)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao buscar qrcode" })
    }
}

const criarQRCode = async (req, res) => {
    try {
        const novoQRCode = new QRCode(req.body)
        await novoQRCode.save()
        res.status(201).json({ erro: false, mensagem: "QRCode criado com sucesso" })
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao criar qrcode" })
    }
}

const alterarQRCode = async (req, res) => {
    try {
        const { id } = req.params
        const qrcode = await QRCode.findByIdAndUpdate(id, req.body, { new: true })
        if (!qrcode) return res.status(404).json({ erro: true, mensagem: "QRCode não encontrado" })
        res.status(200).json(qrcode)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao alterar qrcode" })
    }
}

const deletarQRCode = async (req, res) => {
    try {
        const { id } = req.params
        const qrcode = await QRCode.findByIdAndDelete(id)
        if (!qrcode) return res.status(404).json({ erro: true, mensagem: "QRCode não encontrado" })
        res.status(200).json({ erro: false, mensagem: "QRCode deletado" })
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao deletar qrcode" })
    }
}

export { buscarTodosQRCodes, buscarQRCodePorID, criarQRCode, alterarQRCode, deletarQRCode }
