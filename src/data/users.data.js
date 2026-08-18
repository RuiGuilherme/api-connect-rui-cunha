// src/data/users.data.js
// Responsabilidade: manter o ESTADO dos usuários em memória durante a vida
// do servidor (IDs, nomes, e-mails e senhas), para que as requisições
// subsequentes possam resgatar ou manipular as mesmas informações.
// Esta camada é iniciada com os dados de seed e expõe operações CRUD puras.

import seed from './seed.js';

// "Tabela" em memória, inicializada com os dados de seed.
// Enquanto o servidor estiver rodando, as alterações feitas via API
// permanecem aqui (resetam apenas quando o processo reinicia).
let users = [...seed];

function nextId() {
  return users.reduce((max, user) => Math.max(max, user.id), 0) + 1;
}

function list() {
  return users;
}

function findById(id) {
  return users.find((user) => user.id === id);
}

function create({ nome, email, senha }) {
  const user = { id: nextId(), nome, email, senha };
  users.push(user);
  return user;
}

function update(id, data) {
  const index = users.findIndex((user) => user.id === id);
  if (index === -1) return null;

  users[index] = { ...users[index], ...data, id };
  return users[index];
}

function remove(id) {
  const index = users.findIndex((user) => user.id === id);
  if (index === -1) return null;

  const [removed] = users.splice(index, 1);
  return removed;
}

export { list, findById, create, update, remove };
export default { list, findById, create, update, remove };
