import express from "express"
import "./conexaoBD.js"

import routerUsuario from "./rotas/usuario.js"
import routerEvento from "./rotas/evento.js"
import routerProgramacao from "./rotas/programacao.js"
import routerInscricao from "./rotas/inscricao.js"
import routerTrabalho from "./rotas/trabalho.js"
import routerCertificado from "./rotas/certificado.js"
import routerAvaliacao from "./rotas/avaliacao.js"

const app = express()
app.use(express.json())

app.use("/", routerUsuario)
app.use("/", routerEvento)
app.use("/", routerProgramacao)
app.use("/", routerInscricao)
app.use("/", routerTrabalho)
app.use("/", routerCertificado)
app.use("/", routerAvaliacao)

app.listen(3000, () => {
    console.log("Servidor de Gestão de Eventos rodando em: http://localhost:3000")
})
