// server.js
// Responsabilidade: ponto de entrada (bootstrap). Carrega variáveis de
// ambiente e inicia o servidor HTTP escutando na porta configurada.
// A configuração da aplicação (middlewares e rotas) está em src/app.js.

import 'dotenv/config';

import app from './src/app.js';

// Porta específica em que o servidor vai escutar
const PORT = process.env.PORT || 3000;

// Coloca o servidor em modo de escuta
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
