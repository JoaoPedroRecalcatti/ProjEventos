import Usuario from "../models/usuario.js"
import jwt from "jsonwebtoken"

const SENHAJWT = "testandojwt"

const buscarTodosUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find()
        res.status(200).json(usuarios)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao buscar usuarios" })
    }
}

const buscarUsuarioPorID = async (req, res) => {
    try {
        const { id } = req.params
        const usuario = await Usuario.findById(id)
        if (!usuario) return res.status(404).json({ erro: true, mensagem: "Usuario não encontrado" })
        res.status(200).json(usuario)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao buscar usuario" })
    }
}

const criarUsuario = async (req, res) => {
    try {
        const novoUsuario = new Usuario(req.body)
        await novoUsuario.save()
        res.status(201).json({ erro: false, mensagem: "Usuario criado com sucesso" })
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao criar usuario" })
    }
}

const alterarUsuario = async (req, res) => {
    try {
        const { id } = req.params
        const usuario = await Usuario.findByIdAndUpdate(id, req.body, { new: true })
        if (!usuario) return res.status(404).json({ erro: true, mensagem: "Usuario não encontrado" })
        res.status(200).json(usuario)
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao alterar usuario" })
    }
}

const deletarUsuario = async (req, res) => {
    try {
        const { id } = req.params
        const usuario = await Usuario.findByIdAndDelete(id)
        if (!usuario) return res.status(404).json({ erro: true, mensagem: "Usuario não encontrado" })
        res.status(200).json({ erro: false, mensagem: "Usuario deletado" })
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao deletar usuario" })
    }
}

const loginUsuario = async (req, res) => {
    try {
        const { email, senha } = req.body

        if (!email || !senha) {
            return res.status(400).json({ erro: true, mensagem: "Email e senha obrigatórios" })
        }

        const usuario = await Usuario.findOne({ email })

        if (!usuario || usuario.senha !== senha) {
            return res.status(400).json({ erro: true, mensagem: "Email ou senha inválidos" })
        }

        const token = jwt.sign(
            { id: usuario._id, nome: usuario.nome, tipo: usuario.tipo },
            SENHAJWT,
            { expiresIn: '1h' }
        )

        res.status(200).json({
            erro: false,
            mensagem: "Usuario logado com sucesso",
            token: token
        })
    } catch (error) {
        res.status(500).json({ erro: true, mensagem: "Erro ao fazer login" })
    }
}

export { buscarTodosUsuarios, buscarUsuarioPorID, criarUsuario, alterarUsuario, deletarUsuario, loginUsuario }
