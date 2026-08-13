# ProjEventos

## Proposta de Trabalho
**Plataforma de Gestão de Eventos Corporativos e Acadêmicos**

O ProjEventos é uma plataforma desenvolvida para organizar eventos como congressos, simpósios e palestras. O objetivo é centralizar e facilitar processos como a inscrição de participantes, submissão de trabalhos científicos e a emissão automatizada de certificados.

---

## Equipe de Desenvolvimento
- Guilherme Albuquerque
- João Pedro Recalcatti
- Antônio Carlos

---

## Funcionalidades Principais

- **Cadastro de Eventos:** organizadores podem criar eventos, definir a programação completa, listar palestrantes e gerenciar categorias de ingressos (gratuito, pago ou VIP).
- **Inscrição de Participantes:** usuários podem realizar inscrições, escolher palestras ou workshops de interesse e gerar QR Codes para acesso.
- **Submissão de Trabalhos:** módulo para que participantes enviem artigos científicos, pôsteres ou resumos, com sistema de revisão pelos avaliadores.
- **Emissão de Certificados:** geração automática de certificados para participantes, palestrantes e organizadores.
- **Sistema de Feedback:** coleta de avaliações sobre palestras e eventos, gerando dados para análise e melhorias.
- **Autenticação com Token JWT:** login com token de acesso para proteger rotas de gerenciamento.

---

## Status do Desenvolvimento

O back-end conta com CRUD completo para todas as entidades do projeto, persistindo os dados em MongoDB:

- **Usuário:** cadastro, login com token JWT e gestão de perfis (Organizador/Participante).
- **Evento:** criação e gerenciamento de eventos.
- **Programação:** itens de horário e título vinculados a cada evento.
- **Inscrição:** registro da participação de usuários em eventos.
- **Trabalho:** submissão de artigos, resumos e pôsteres.
- **Certificado:** emissão e validação de certificados.
- **Avaliação:** feedback dos participantes (1 a 5 estrelas + comentário).
- **Ingresso:** categorias de ingressos vinculadas a cada evento (GRATUITO, PAGO ou VIP).
- **QRCode:** código único gerado por inscrição para controle de acesso.
- **Feedback de Atividade:** avaliação individual de cada item da programação.
- **Avaliação de Trabalho:** revisão de trabalhos submetidos (APROVADO / REPROVADO / PENDENTE_AJUSTES).
- **Validação de Presença:** registro da validação da presença de um participante.
- **Relatório de Feedback:** consolidação dos feedbacks de um evento.

O código do back-end foi organizado em camadas dentro de `backend/`: os models ficam em `models/`, a lógica das rotas em `controladores/`, os arquivos de roteamento em `rotas/` e os middlewares em `middleware/`. A conexão com o banco está isolada em `conexaoBD.js` e o `server.js` apenas registra os routers.

### Front-end

A interface está sendo desenvolvida em Next.js com o App Router, e a estilização é feita com Tailwind CSS. Nesta fase foi definida a estrutura de navegação do sistema, com o roteamento baseado em pastas: cada pasta criada dentro de `src/app/` vira uma rota, e o arquivo `page.js` dentro dela é a página exibida.

- `/` — página inicial com o painel de gestão.
- `/login` — acesso de organizadores.
- `/eventos` — listagem de eventos.
- `/eventos/editar` — edição de um evento (rota aninhada).

A pasta `eventos/` possui um `layout.js` próprio, aplicado somente às páginas daquela seção, enquanto o `layout.js` da raiz define o idioma (`pt-br`) e os metadados da aplicação. As páginas ainda não consomem a API: nesta etapa o foco foi a organização das rotas e a estilização inicial.

## Tecnologias Utilizadas

- Node.js: ambiente de execução.
- Express: framework para criação da API REST.
- MongoDB: banco de dados NoSQL.
- Mongoose: ODM para modelagem dos schemas.
- MongoDB Compass: interface visual para gerenciar o banco.
- jsonwebtoken: geração e validação de tokens JWT no login.
- mongoose-unique-validator: plugin do Mongoose para tratar erros de campos únicos.
- bcrypt: criptografia (hash) das senhas antes de salvar no banco.
- dotenv: carrega variáveis de ambiente de um arquivo `.env`.
- Next.js: framework React utilizado no front-end, com App Router.
- React: biblioteca de construção das interfaces.
- Tailwind CSS: framework de estilização por classes utilitárias.
- ESLint: análise estática do código do front-end.

## Estrutura do Projeto

```
ProjTesi/
├── backend/                  # API REST em Express (porta 3001)
│   ├── conexaoBD.js          # Conexão com o MongoDB
│   ├── server.js             # Servidor Express (registra os routers)
│   ├── models/               # Schemas Mongoose (um por entidade)
│   ├── controladores/        # Lógica das rotas (funções async)
│   ├── rotas/                # Roteamento por entidade
│   ├── middleware/
│   │   └── verificarToken.js # Valida o token JWT
│   ├── Colecao_de_Requisicoes_Insomnia.har  # Requisições exportadas do Insomnia
│   └── package.json
├── frontend/                 # Interface em Next.js (porta 3000)
│   ├── src/app/
│   │   ├── layout.js         # Layout raiz (idioma e metadados)
│   │   ├── page.js           # Página inicial
│   │   ├── globals.css       # Estilos globais e import do Tailwind
│   │   ├── login/
│   │   │   └── page.js       # Rota /login
│   │   └── eventos/
│   │       ├── layout.js     # Layout aplicado só à área de eventos
│   │       ├── page.js       # Rota /eventos
│   │       └── editar/
│   │           └── page.js   # Rota /eventos/editar
│   ├── public/               # Arquivos estáticos
│   └── package.json
├── documentos/               # DER, Diagrama de Classes e Documento de Requisitos
│   ├── DER.pdf
│   ├── Diagrama De Classes.pdf
│   └── Documento de Requisitos.pdf
└── README.md
```

## Como Executar o Projeto

O projeto é composto por duas aplicações independentes, que precisam ser executadas ao mesmo tempo, cada uma em um terminal.

### Pré-requisitos

1. Ter o Node.js e o MongoDB Community Server instalados e em execução (o MongoDB usa por padrão a porta 27017).
2. (Opcional) Instalar o MongoDB Compass para visualizar os dados.
3. Clonar o repositório.

### Back-end

1. Entrar na pasta do back-end:
   ```bash
   cd backend
   ```
2. Criar um arquivo `.env` copiando o `.env.example`:
   ```
   MONGO_URI=mongodb://localhost:27017/platevento
   JWT_SECRET=coloque_uma_chave_secreta_aqui
   PORT=3001
   ```
   O `.env` não é versionado por conter credenciais.
3. Instalar as dependências:
   ```bash
   npm install --legacy-peer-deps
   ```
4. Iniciar o servidor:
   ```bash
   npm run dev
   ```
5. Se tudo der certo, o console mostra:
   ```
   Servidor de Gestão de Eventos rodando em: http://localhost:3001
   Conexão bem sucedida ao MongoDB
   ```
6. O banco definido em `MONGO_URI` é criado automaticamente no primeiro insert.

### Front-end

1. Em outro terminal, entrar na pasta do front-end:
   ```bash
   cd frontend
   ```
2. Instalar as dependências:
   ```bash
   npm install
   ```
3. Iniciar a aplicação:
   ```bash
   npm run dev
   ```
4. Acessar `http://localhost:3000` no navegador.

## Rotas da API

Cada entidade segue o padrão CRUD:

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| POST | `/:entidade` | Cria um novo registro. |
| GET | `/:entidade` | Lista todos os registros. |
| GET | `/:entidade/:id` | Busca um registro pelo `_id`. |
| PUT | `/:entidade/:id` | Atualiza um registro existente. |
| DELETE | `/:entidade/:id` | Remove o registro do banco. |

**Entidades disponíveis:** `usuarios`, `eventos`, `programacao`, `inscricoes`, `trabalhos`, `certificados`, `avaliacoes`, `ingressos`, `qrcodes`, `feedbacksAtividade`, `avaliacoesTrabalho`, `validacoesPresenca` e `relatoriosFeedback`.

### Relações entre modelos

Quando uma entidade tem relação com outra, as rotas de busca já retornam os dados relacionados via `populate`. Por exemplo, ao buscar um evento, o campo `id_organizador` vem com nome, email e tipo do usuário que criou. Relações ativas:

- Evento → Usuário (organizador)
- Programação → Evento
- Inscrição → Usuário + Evento
- Trabalho → Evento + Usuário
- Certificado → Evento + Usuário
- Avaliação → Evento + Usuário
- Ingresso → Evento
- QRCode → Inscrição
- Feedback de Atividade → Programação + Usuário
- Avaliação de Trabalho → Trabalho + Usuário (avaliador)
- Validação de Presença → Inscrição + Usuário (organizador)
- Relatório de Feedback → Evento + Usuário (organizador)

Nos POST das entidades vinculadas ao usuário logado (`/eventos`, `/inscricoes`, `/trabalhos`, `/avaliacoes`, `/feedbacksAtividade`, `/avaliacoesTrabalho`, `/validacoesPresenca`, `/relatoriosFeedback`), o `id_usuario` (ou `id_organizador`/`id_avaliador`, conforme o caso) é preenchido automaticamente a partir do token JWT.

### Listagens por usuário

Cada entidade tem uma rota que filtra registros por usuário:

- `GET /eventos/usuario/:idUsuario`
- `GET /inscricoes/usuario/:idUsuario`
- `GET /trabalhos/usuario/:idUsuario`
- `GET /certificados/usuario/:idUsuario`
- `GET /avaliacoes/usuario/:idUsuario`

### Rota de Login

`POST /login` recebe email e senha, valida no banco e retorna `token`, `email` e `tipo` do usuário. Token válido por 1 hora.

O payload do token JWT carrega `id`, `nome` e `tipo` do usuário. O `tipo` é usado para o controle de permissões.

### Rotas protegidas por token

As rotas abaixo exigem o header `Authorization: Bearer <token>` (obtido no login):

- **Usuários (qualquer tipo logado):** `GET /usuarios`, `GET /usuarios/:id`, `PUT /usuarios/:id`, `DELETE /usuarios/:id`.
- **Criação vinculada ao usuário logado:** `POST /eventos`, `POST /inscricoes`, `POST /trabalhos`, `POST /avaliacoes`, `POST /feedbacksAtividade`, `POST /avaliacoesTrabalho`.
- **Gerenciamento administrativo:** `PUT /eventos/:id`, `DELETE /eventos/:id`, todas as rotas administrativas de `/programacao`, `/certificados`, `/ingressos`, `/validacoesPresenca` e `/relatoriosFeedback`.

As demais rotas (`POST /usuarios` para cadastro, `POST /login`, `POST /qrcodes` e todos os `GET` públicos) ficam abertas.

### Controle de Permissões por Tipo

O sistema usa o campo `tipo` do usuário para definir quem executa cada ação. As rotas administrativas de evento, programação, certificado, ingresso, validação de presença e relatório de feedback são restritas a `ORGANIZADOR`.

Se um usuário `PARTICIPANTE` tentar acessar uma dessas rotas, a API retorna `403` com uma mensagem descritiva e registra no console um log de tentativa negada.

### Validação de e-mail e senha

O campo `email` do usuário é obrigatório, único, salvo em minúsculas e validado por regex (`/^\S+@\S+\.\S+$/`). Se o email estiver inválido, o Mongoose retorna `"Email invalido"`. Se já existir usuário com o mesmo email, o plugin `mongoose-unique-validator` retorna erro de duplicidade.

As senhas são criptografadas com `bcrypt` antes de serem salvas. No cadastro (`POST /usuarios`), a senha é hasheada com `bcrypt.hash(senha, 10)` e apenas o hash é armazenado. No login (`POST /login`), a comparação é feita com `bcrypt.compare(senhaDigitada, hashSalvo)`.

### Variáveis de ambiente

Nenhuma credencial fica escrita direto no código-fonte. As configurações sensíveis são carregadas de um arquivo `.env` (fora do controle de versão) pelo pacote `dotenv`:

- `MONGO_URI`: string de conexão do MongoDB.
- `JWT_SECRET`: chave secreta usada para assinar e validar os tokens JWT.
- `PORT`: porta em que o servidor Express escuta.

A pasta `backend/` contém um `.env.example` como modelo. Ao clonar o projeto, basta copiá-lo para `.env` na mesma pasta e preencher com os valores adequados.

## Coleção de Requisições (Insomnia)

O arquivo `backend/Colecao_de_Requisicoes_Insomnia.har` contém a coleção exportada do Insomnia com todas as requisições utilizadas para testar a API durante o desenvolvimento. Essa coleção cobre criação e cadastro de usuários, login com JWT, testes de rotas protegidas, CRUD completo das entidades principais (eventos, programação, inscrições, trabalhos, certificados, avaliações, ingressos, QR codes, validações de presença e relatórios de feedback), além de testes de permissão e validação de erros.

### Como importar

1. Abrir o Insomnia.
2. Ir em **Application → Preferences → Data**.
3. Clicar em **Import** → **Choose File** e selecionar o arquivo `backend/Colecao_de_Requisicoes_Insomnia.har`.
4. Confirmar a importação.

Depois disso, todas as requisições vão aparecer numa coleção chamada `ProjEventos API` e podem ser executadas para testar a API.

## Exemplo de uso no Insomnia

**1. Criar usuário**: `POST http://localhost:3001/usuarios`

```json
{
  "nome": "Guilherme Albuquerque",
  "email": "guilherme@exemplo.com",
  "senha": "123",
  "tipo": "ORGANIZADOR"
}
```

**2. Fazer login**: `POST http://localhost:3001/login`

```json
{
  "email": "guilherme@exemplo.com",
  "senha": "123"
}
```

A resposta traz um campo `token` que deve ser copiado.

**3. Acessar rota protegida**: `GET http://localhost:3001/usuarios`

Na aba Headers do Insomnia, adicionar:

- Name: `Authorization`
- Value: `Bearer <cole_o_token_aqui>`

### Exemplos das novas entidades

Todos os POST abaixo exigem o header `Authorization: Bearer <token>` (exceto `/qrcodes`, que é aberto).

**Criar Ingresso** (ORGANIZADOR): `POST http://localhost:3001/ingressos`

```json
{
  "id_evento": "COLE_O_ID_DO_EVENTO",
  "preco": 50.00,
  "tipo_ingresso": "PAGO"
}
```

**Criar QRCode**: `POST http://localhost:3001/qrcodes`

```json
{
  "id_inscricao": "COLE_O_ID_DA_INSCRICAO",
  "codigo": "QR-ABC123"
}
```

**Criar Feedback de Atividade**: `POST http://localhost:3001/feedbacksAtividade`

```json
{
  "id_programacao": "COLE_O_ID_DA_PROGRAMACAO",
  "nota": 5,
  "comentario": "Excelente palestra!"
}
```

**Criar Avaliação de Trabalho**: `POST http://localhost:3001/avaliacoesTrabalho`

```json
{
  "id_trabalho": "COLE_O_ID_DO_TRABALHO",
  "status": "APROVADO",
  "observacoes": "Trabalho bem estruturado."
}
```

**Validar Presença** (ORGANIZADOR): `POST http://localhost:3001/validacoesPresenca`

```json
{
  "id_inscricao": "COLE_O_ID_DA_INSCRICAO"
}
```

**Gerar Relatório de Feedback** (ORGANIZADOR): `POST http://localhost:3001/relatoriosFeedback`

```json
{
  "id_evento": "COLE_O_ID_DO_EVENTO",
  "conteudo": "Resumo consolidado dos feedbacks do evento."
}
```

Nos exemplos acima, os campos `id_usuario`, `id_avaliador` e `id_organizador` são preenchidos automaticamente pelo token JWT: não é preciso enviar no body.
