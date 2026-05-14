# ProjEventos

## 📝 Proposta de Trabalho
**Plataforma de Gestão de Eventos Corporativos e Acadêmicos**

O **ProjEventos** é uma plataforma desenvolvida para organizar eventos como congressos, simpósios e palestras. O objetivo é centralizar e facilitar processos como a inscrição de participantes, submissão de trabalhos científicos e a emissão automatizada de certificados.

---

## 👥 Equipe de Desenvolvimento
* **Guilherme Albuquerque**
* **João Pedro Recalcatti**
* **Antônio Carlos F. de Souza**

---

## 🚀 Funcionalidades Principais

* **📅 Cadastro de Eventos:** Organizadores podem criar eventos, definir a programação completa, listar palestrantes e gerenciar categorias de ingressos (gratuito, pago ou VIP).
* **🎟️ Inscrição de Participantes:** Usuários podem realizar inscrições, escolher palestras ou workshops de interesse e gerar QR Codes para agilizar o controle de acesso.
* **📄 Submissão de Trabalhos:** Módulo dedicado para que participantes enviem artigos científicos, pôsteres ou resumos, incluindo um sistema de revisão para os avaliadores.
* **🎓 Emissão de Certificados:** Geração automática de certificados personalizados para participantes, palestrantes e organizadores após a conclusão do evento.
* **📊 Sistema de Feedback:** Ferramenta para coleta de avaliações sobre as palestras e o evento em geral, gerando dados para análise e melhorias futuras.

---

## 🛠️ Status do Desenvolvimento

A base do sistema (Back-end) conta com um **CRUD completo** para todas as entidades do projeto, agora persistindo os dados em um banco **MongoDB**:

* **Usuário**: Cadastro e gestão de perfis (Organizadores/Participantes).
* **Evento**: Criação e gerenciamento de informações sobre os eventos.
* **Programação**: Itens de horário e título vinculados a cada evento.
* **Inscrição**: Registro da participação de usuários em eventos específicos.
* **Trabalho**: Submissão de artigos, resumos e pôsteres dos participantes.
* **Certificado**: Emissão e validação de certificados.
* **Avaliação**: Feedback dos participantes (1 a 5 estrelas + comentário).

Os modelos ficam separados na pasta `/models` (um arquivo por entidade) e a conexão com o banco está isolada em `conexaoBD.js`.

## 💻 Tecnologias Utilizadas

* **Node.js**: Ambiente de execução.
* **Express**: Framework para criação da API REST.
* **MongoDB**: Banco de dados NoSQL orientado a documentos.
* **Mongoose**: ODM (Object Document Mapper) para modelagem dos schemas.
* **MongoDB Compass**: Interface visual para gerenciar o banco.

## 🗂️ Estrutura do Projeto

```
ProjTesi/
├── conexaoBD.js          # Conexão com o MongoDB
├── server.js             # Servidor Express e rotas (CRUD)
├── models/               # Schemas Mongoose (um por entidade)
│   ├── usuario.js
│   ├── evento.js
│   ├── programacao.js
│   ├── inscricao.js
│   ├── trabalho.js
│   ├── certificado.js
│   ├── avaliacao.js
│   └── exemplo.js
└── package.json
```

## 🚀 Como Executar o Projeto

1. Certifique-se de ter o **Node.js** e o **MongoDB Community Server** instalados e em execução (o MongoDB usa por padrão a porta `27017`).
2. (Opcional) Instale o **MongoDB Compass** para visualizar os dados graficamente.
3. Clone o repositório para sua máquina local.
4. No terminal da pasta do projeto, instale as dependências:
   ```bash
   npm install
   ```
5. Inicie o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```
6. Se tudo der certo, você verá no console:
   ```
   Servidor de Gestão de Eventos rodando em: http://localhost:3000
   Conexão bem sucedida ao MongoDB
   ```
7. O banco `platevento` será criado automaticamente no primeiro insert.

## 🔗 Rotas da API

Cada entidade segue o padrão CRUD completo:

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| **POST** | `/:entidade` | Cria um novo registro. |
| **GET** | `/:entidade` | Lista todos os registros. |
| **GET** | `/:entidade/:id` | Busca um registro pelo `_id` do Mongo. |
| **PUT** | `/:entidade/:id` | Atualiza um registro existente. |
| **DELETE** | `/:entidade/:id` | Remove o registro do banco. |

**Entidades disponíveis:** `usuarios`, `eventos`, `programacao`, `inscricoes`, `trabalhos`, `certificados`, `avaliacoes` e `exemplo`.

### Exemplo de uso no Insomnia

`POST http://localhost:3000/usuarios`

```json
{
  "nome": "Guilherme Albuquerque",
  "email": "guilherme@exemplo.com",
  "senha": "123",
  "tipo": "ORGANIZADOR"
}
```
