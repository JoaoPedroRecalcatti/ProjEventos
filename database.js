import { randomUUID } from "crypto"
import fs from "fs/promises"

const arquivo = new URL("./dados.json", import.meta.url)

class Database {
    database = {}

    constructor (){
        fs.readFile(arquivo, 'utf-8')
        .then(dados => {
            this.database = JSON.parse(dados);
        })
        .catch(() => {
            this.atualizar();
        })
    }

    atualizar(){
        fs.writeFile(arquivo, JSON.stringify(this.database, null, 2))
    }

    adicionar(tabela, item){
        const novoItem = {
            id: randomUUID(),
            ...item
        }
        
        let msg = ""

        if (Array.isArray(this.database[tabela])){
            this.database[tabela].push(novoItem)
            msg = "Item adicionado com sucesso!"
        } else {
            this.database[tabela] = [novoItem]
            msg = "Nova tabela criada e item adicionado!"
        }

        this.atualizar()
        return { mensagem: msg, dados: novoItem }
    }
    
    buscar(tabela){
        return this.database[tabela] ?? []
    }

    buscarItem(tabela, id){
        if (Array.isArray(this.database[tabela])){
            const item = this.database[tabela].find(elemento => elemento.id == id)
            return item || { erro: "Item não encontrado" }
        } else {
            return { erro: "Tabela não encontrada" }
        }
    }

    alterar(tabela, id, itemNovo){
        if (Array.isArray(this.database[tabela])){
            let index = this.database[tabela].findIndex(elem => elem.id == id)
            
            if(index == -1){
                return { erro: "Id não encontrado" }
            }
            
            // Pega o que existe e atualiza com os campos novos (Eventos, Usuarios, etc) mantendo o ID
            this.database[tabela][index] = { 
                ...this.database[tabela][index], 
                ...itemNovo, 
                id: id 
            }
            
            this.atualizar()
            return { mensagem: "Dados atualizados com sucesso", dados: this.database[tabela][index] }
        } else {
            return { erro: "Tabela não encontrada" }
        }
    }

    deletar(tabela, id){
        if (Array.isArray(this.database[tabela])){
            let index = this.database[tabela].findIndex(elem => elem.id == id)
            if(index == -1){
                return { erro: "Id não encontrado" }
            }
            
            this.database[tabela].splice(index, 1)
            this.atualizar()
            return { mensagem: "Deletado com sucesso" }
            
        } else {
            return { erro: "Tabela não encontrada" }
        }
    }
}

export default Database 
