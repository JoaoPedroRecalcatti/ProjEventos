import express from "express"
import "./conexaoBD.js"

import Exemplo from "./models/exemplo.js"
import Usuario from "./models/usuario.js"
import Evento from "./models/evento.js"
import Programacao from "./models/programacao.js"
import Inscricao from "./models/inscricao.js"
import Trabalho from "./models/trabalho.js"
import Certificado from "./models/certificado.js"
import Avaliacao from "./models/avaliacao.js"

const app = express()
app.use(express.json())

// ============================
// USUARIOS
// ============================
app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.find()
        res.json(usuarios)
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})

app.get('/usuarios/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id)
        res.json(usuario)
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})

app.post('/usuarios', async (req, res) => {
    try {
        const novoUsuario = new Usuario(req.body)
        await novoUsuario.save()
        res.send("Novo usuário criado")
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})

app.put('/usuarios/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(usuario)
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})

app.delete('/usuarios/:id', async (req, res) => {
    try {
        await Usuario.findByIdAndDelete(req.params.id)
        res.send("Usuário deletado")
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})


// ============================
// EVENTOS
// ============================
app.get('/eventos', async (req, res) => {
    try {
        const eventos = await Evento.find()
        res.json(eventos)
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})

app.get('/eventos/:id', async (req, res) => {
    try {
        const evento = await Evento.findById(req.params.id)
        res.json(evento)
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})

app.post('/eventos', async (req, res) => {
    try {
        const novoEvento = new Evento(req.body)
        await novoEvento.save()
        res.send("Novo evento criado")
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})

app.put('/eventos/:id', async (req, res) => {
    try {
        const evento = await Evento.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(evento)
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})

app.delete('/eventos/:id', async (req, res) => {
    try {
        await Evento.findByIdAndDelete(req.params.id)
        res.send("Evento deletado")
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})


// ============================
// PROGRAMACAO
// ============================
app.get('/programacao', async (req, res) => {
    try {
        const programacao = await Programacao.find()
        res.json(programacao)
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})

app.get('/programacao/:id', async (req, res) => {
    try {
        const programacao = await Programacao.findById(req.params.id)
        res.json(programacao)
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})

app.post('/programacao', async (req, res) => {
    try {
        const novaProgramacao = new Programacao(req.body)
        await novaProgramacao.save()
        res.send("Nova programação criada")
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})

app.put('/programacao/:id', async (req, res) => {
    try {
        const programacao = await Programacao.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(programacao)
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})

app.delete('/programacao/:id', async (req, res) => {
    try {
        await Programacao.findByIdAndDelete(req.params.id)
        res.send("Programação deletada")
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})


// ============================
// INSCRICOES
// ============================
app.get('/inscricoes', async (req, res) => {
    try {
        const inscricoes = await Inscricao.find()
        res.json(inscricoes)
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})

app.get('/inscricoes/:id', async (req, res) => {
    try {
        const inscricao = await Inscricao.findById(req.params.id)
        res.json(inscricao)
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})

app.post('/inscricoes', async (req, res) => {
    try {
        const novaInscricao = new Inscricao(req.body)
        await novaInscricao.save()
        res.send("Nova inscrição criada")
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})

app.put('/inscricoes/:id', async (req, res) => {
    try {
        const inscricao = await Inscricao.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(inscricao)
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})

app.delete('/inscricoes/:id', async (req, res) => {
    try {
        await Inscricao.findByIdAndDelete(req.params.id)
        res.send("Inscrição deletada")
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})


// ============================
// TRABALHOS
// ============================
app.get('/trabalhos', async (req, res) => {
    try {
        const trabalhos = await Trabalho.find()
        res.json(trabalhos)
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})

app.get('/trabalhos/:id', async (req, res) => {
    try {
        const trabalho = await Trabalho.findById(req.params.id)
        res.json(trabalho)
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})

app.post('/trabalhos', async (req, res) => {
    try {
        const novoTrabalho = new Trabalho(req.body)
        await novoTrabalho.save()
        res.send("Novo trabalho criado")
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})

app.put('/trabalhos/:id', async (req, res) => {
    try {
        const trabalho = await Trabalho.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(trabalho)
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})

app.delete('/trabalhos/:id', async (req, res) => {
    try {
        await Trabalho.findByIdAndDelete(req.params.id)
        res.send("Trabalho deletado")
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})


// ============================
// CERTIFICADOS
// ============================
app.get('/certificados', async (req, res) => {
    try {
        const certificados = await Certificado.find()
        res.json(certificados)
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})

app.get('/certificados/:id', async (req, res) => {
    try {
        const certificado = await Certificado.findById(req.params.id)
        res.json(certificado)
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})

app.post('/certificados', async (req, res) => {
    try {
        const novoCertificado = new Certificado(req.body)
        await novoCertificado.save()
        res.send("Novo certificado criado")
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})

app.put('/certificados/:id', async (req, res) => {
    try {
        const certificado = await Certificado.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(certificado)
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})

app.delete('/certificados/:id', async (req, res) => {
    try {
        await Certificado.findByIdAndDelete(req.params.id)
        res.send("Certificado deletado")
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})


// ============================
// AVALIACOES
// ============================
app.get('/avaliacoes', async (req, res) => {
    try {
        const avaliacoes = await Avaliacao.find()
        res.json(avaliacoes)
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})

app.get('/avaliacoes/:id', async (req, res) => {
    try {
        const avaliacao = await Avaliacao.findById(req.params.id)
        res.json(avaliacao)
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})

app.post('/avaliacoes', async (req, res) => {
    try {
        const novaAvaliacao = new Avaliacao(req.body)
        await novaAvaliacao.save()
        res.send("Nova avaliação criada")
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})

app.put('/avaliacoes/:id', async (req, res) => {
    try {
        const avaliacao = await Avaliacao.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(avaliacao)
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})

app.delete('/avaliacoes/:id', async (req, res) => {
    try {
        await Avaliacao.findByIdAndDelete(req.params.id)
        res.send("Avaliação deletada")
    } catch (error) {
        res.send(`Error: ${error}`)
    }
})


app.listen(3000, () => {
    console.log("Servidor de Gestão de Eventos rodando em: http://localhost:3000")
})
