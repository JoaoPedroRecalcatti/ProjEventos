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

Atualmente, a base do sistema (Back-end) já conta com um **CRUD Dinâmico** para as três entidades principais solicitadas:
* **Usuário**: Cadastro e gestão de perfis (Organizadores/Participantes).
* **Evento**: Criação e gerenciamento de informações sobre os eventos.
* **InscriçãoEvento**: Registro da participação de usuários em eventos específicos.

O sistema utiliza um banco de dados persistente em formato JSON, garantindo que os dados não sejam perdidos ao reiniciar o servidor.

## 💻 Tecnologias Utilizadas

* **Node.js**: Ambiente de execução.
* **Express**: Framework para criação da API.
* **File System (fs/promises)**: Persistência de dados em arquivos locais.
* **UUID**: Geração de identificadores únicos para cada registro.

## 🚀 Como Executar o Projeto

1. Certifique-se de ter o Node.js instalado.
2. Clone o repositório para sua máquina local.
3. No terminal da pasta do projeto, instale as dependências:
   ```bash
    npm install
4. Inicie o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
5. O servidor estará rodando em: http://localhost:3000
6. ## 🔗 Exemplos de USO no Insomnia

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| **POST** | `/:tabela` | Cria um novo registro na tabela especificada (ex: `/usuarios`). |
| **GET** | `/:tabela` | Retorna todos os registros da tabela informada. |
| **GET** | `/:tabela/:id` | Busca um único registro através do seu ID único. |
| **PUT** | `/:tabela/:id` | Atualiza os dados de um registro existente mantendo o ID. |
| **DELETE** | `/:tabela/:id` | Remove permanentemente um registro do banco de dados JSON. |
