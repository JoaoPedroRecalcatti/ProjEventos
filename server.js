import express from "express"
import Database from "./database.js"

const app = express()
app.use(express.json())

const db = new Database()

// Criar (POST)
app.post('/:tabela', (req, res) => {
    const {tabela} = req.params
    const resposta = db.adicionar(tabela, req.body)
    res.status(201).json(resposta)
})

// Listar todos (GET)
app.get('/:tabela', (req, res) => {
   const {tabela} = req.params
   res.json(db.buscar(tabela))
})

// Buscar um específico por ID (GET)
app.get("/:tabela/:id", (req, res) => {
    const {id, tabela} = req.params
    res.json(db.buscarItem(tabela, id))
})

// Atualizar (PUT)
app.put("/:tabela/:id", (req, res) => {
    const {id, tabela} = req.params
    const resposta = db.alterar(tabela, id, req.body)
    res.json(resposta)
})

// Deletar (DELETE)
app.delete("/:tabela/:id", (req, res) => {
    const {id, tabela} = req.params
    const resposta = db.deletar(tabela, id)
    res.json(resposta)
})

app.listen(3000, ()=> {
    console.log("Servidor de Gestão de Eventos rodando em: http://localhost:3000")
})