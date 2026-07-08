import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const verificarToken = (req, res, next) => {
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        return res.status(401).json({ erro: true, mensagem: "Acesso negado" })
    }

    jwt.verify(token, process.env.JWT_SECRET, (erro, usuarioDecodificado) => {
        if (erro) {
            return res.status(403).json({ erro: true, mensagem: "Token inválido" })
        }

        req.usuario = usuarioDecodificado
        next()
    })
}

export default verificarToken
