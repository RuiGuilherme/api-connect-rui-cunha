# API de Usuários - ativ2

> 🎓 **Trabalho de faculdade.** Este projeto foi desenvolvido como **atividade acadêmica** para fins exclusivamente educacionais e de avaliação. Não é um software comercial.

API REST para gerenciamento de usuários, desenvolvida como atividade acadêmica. Os dados são mantidos **em memória** durante a execução do servidor e são populados a partir de um seed inicial.

## Objetivo da API

Esta API é um **trabalho acadêmico** cujo objetivo é demonstrar na prática a construção de um serviço HTTP com operações CRUD (Create, Read, Update, Delete) para o recurso `usuários`, permitindo criar, listar, buscar, atualizar e remover registros. Os dados **não são persistidos**: as alterações feitas via API são resetadas quando o servidor reinicia.

## Tecnologias utilizadas

| Tecnologia | Descrição |
| --- | --- |
| **Node.js** | Plataforma de execução (JavaScript no servidor) |
| **Koa** | Framework web para construção da API |
| **@koa/router** | Roteamento das rotas HTTP |
| **koa-bodyparser** | Parsing de JSON no corpo das requisições |
| **ES Modules** | Organização do código em módulos (`import`/`export`) |
| **Nodemon** | Reinício automático do servidor em desenvolvimento |
| **ESLint + Prettier** | Padronização e formatação de código |

## Estrutura do projeto

```
├── server.js                  # Bootstrap: carrega env e inicia o servidor
├── src/
│   ├── app.js                 # Configuração da aplicação Koa (middlewares e rotas)
│   ├── controllers/
│   │   └── users.controller.js  # Lógica de negócio dos endpoints /users
│   ├── data/
│   │   ├── seed.js            # Dados iniciais de usuários
│   │   └── users.data.js      # Camada de dados em memória (CRUD)
│   └── routes/
│       ├── index.js           # Central que agrega as rotas
│       └── users.routes.js    # Rotas do recurso /users
└── package.json               # Dependências e scripts
```

## Passo a passo para execução local

### 1. Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (versão 18 ou superior).

### 2. Instalar as dependências

```bash
npm install
```

### 3. Configurar a porta (opcional)

Por padrão, a API roda na porta **3000**. Para usar outra porta, defina a variável de ambiente `PORT`:

```bash
# PowerShell
$env:PORT = 3001

# CMD / Bash
set PORT=3001
```

### 4. Iniciar o servidor

Modo de desenvolvimento (com reinício automático via Nodemon):

```bash
npm run dev
```

Ou em modo de produção:

```bash
npm start
```

### 5. Acessar a API

Com o servidor rodando, a API estará disponível em:

```
http://localhost:3000
```

> Exemplo: `http://localhost:3000/users`

---

## Endpoints

Todas as respostas são em JSON (exceto `DELETE`, que retorna `204 No Content`). O campo `senha` nunca é retornado nas respostas.

### `GET /users`

Lista todos os usuários.

- **Resposta:** `200 OK`

```json
[
  {
    "id": 1,
    "nome": "Brenda Souza",
    "email": "brenda@example.com"
  },
  {
    "id": 2,
    "nome": "Bruno Lima",
    "email": "bruno@example.com"
  }
]
```

### `GET /users/:id`

Busca um usuário pelo ID.

- **Resposta:** `200 OK`

```json
{
  "id": 1,
  "nome": "Brenda Souza",
  "email": "brenda@example.com"
}
```

- **Resposta de erro (usuário inexistente):** `404 Not Found`

```json
{
  "message": "Usuário não encontrado"
}
```

### `POST /users`

Cria um novo usuário.

- **Corpo da requisição (JSON):**

```json
{
  "nome": "Carlos Silva",
  "email": "carlos@example.com",
  "senha": "123456"
}
```

- **Resposta:** `201 Created`

```json
{
  "id": 3,
  "nome": "Carlos Silva",
  "email": "carlos@example.com"
}
```

- **Resposta de erro (campo obrigatório ausente):** `400 Bad Request`

```json
{
  "message": "Campos obrigatórios: nome, email e senha"
}
```

### `PUT /users/:id`

Atualiza os dados de um usuário existente.

- **Corpo da requisição (JSON):** apenas os campos a alterar.

```json
{
  "nome": "Carlos A. Silva"
}
```

- **Resposta:** `200 OK`

```json
{
  "id": 3,
  "nome": "Carlos A. Silva",
  "email": "carlos@example.com"
}
```

- **Resposta de erro (usuário inexistente):** `404 Not Found`

```json
{
  "message": "Usuário não encontrado"
}
```

### `DELETE /users/:id`

Remove um usuário pelo ID.

- **Resposta:** `204 No Content` (sem corpo)
- **Resposta de erro (usuário inexistente):** `404 Not Found`

```json
{
  "message": "Usuário não encontrado"
}
```

---

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor com Nodemon (dev) |
| `npm start` | Inicia o servidor em modo de produção |
| `npm run lint` | Executa o ESLint no projeto |
| `npm run format` | Formata o código com Prettier |
