import express from "express"
import dotenv from "dotenv"
import "./conexaoBD.js"

dotenv.config()

import routerUsuario from "./rotas/usuario.js"
import routerEvento from "./rotas/evento.js"
import routerProgramacao from "./rotas/programacao.js"
import routerInscricao from "./rotas/inscricao.js"
import routerTrabalho from "./rotas/trabalho.js"
import routerCertificado from "./rotas/certificado.js"
import routerAvaliacao from "./rotas/avaliacao.js"
import routerIngresso from "./rotas/ingresso.js"
import routerQRCode from "./rotas/qrcode.js"
import routerFeedbackAtividade from "./rotas/feedbackAtividade.js"
import routerAvaliacaoTrabalho from "./rotas/avaliacaoTrabalho.js"
import routerValidarPresenca from "./rotas/validarPresenca.js"
import routerRelatorioFeedback from "./rotas/relatorioFeedback.js"

const app = express()
app.use(express.json())

app.use("/", routerUsuario)
app.use("/", routerEvento)
app.use("/", routerProgramacao)
app.use("/", routerInscricao)
app.use("/", routerTrabalho)
app.use("/", routerCertificado)
app.use("/", routerAvaliacao)
app.use("/", routerIngresso)
app.use("/", routerQRCode)
app.use("/", routerFeedbackAtividade)
app.use("/", routerAvaliacaoTrabalho)
app.use("/", routerValidarPresenca)
app.use("/", routerRelatorioFeedback)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor de Gestão de Eventos rodando em: http://localhost:${PORT}`)
})
