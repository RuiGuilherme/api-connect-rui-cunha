// src/controllers/users.controller.js
// Responsabilidade: conter a lógica de negócio (manipuladores) do recurso
// usuários. Recebe a requisição HTTP, valida os dados, coordena a camada de
// dados e define a resposta (status + body). Não conhece as rotas.

import usersData from '../data/users.data.js';

function toPublic({ senha, ...user }) {
  return user;
}

// GET /users
async function list(ctx) {
  ctx.body = usersData.list().map(toPublic);
}

// GET /users/:id
async function getById(ctx) {
  const user = usersData.findById(Number(ctx.params.id));
  if (!user) {
    ctx.status = 404;
    ctx.body = { message: 'Usuário não encontrado' };
    return;
  }
  ctx.body = toPublic(user);
}

// POST /users
async function create(ctx) {
  const { nome, email, senha } = ctx.request.body || {};
  if (!nome || !email || !senha) {
    ctx.status = 400;
    ctx.body = { message: 'Campos obrigatórios: nome, email e senha' };
    return;
  }
  const user = usersData.create({ nome, email, senha });
  ctx.status = 201;
  ctx.body = toPublic(user);
}

// PUT /users/:id
async function update(ctx) {
  const updated = usersData.update(Number(ctx.params.id), ctx.request.body || {});
  if (!updated) {
    ctx.status = 404;
    ctx.body = { message: 'Usuário não encontrado' };
    return;
  }
  ctx.body = toPublic(updated);
}

// DELETE /users/:id
async function remove(ctx) {
  const removed = usersData.remove(Number(ctx.params.id));

  if (!removed) {
    ctx.status = 404;
    ctx.body = { message: 'Usuário não encontrado' };
    return;
  }

  ctx.status = 204;
}

export { list, getById, create, update, remove };
