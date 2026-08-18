// src/app.js
// Responsabilidade: construir e configurar a aplicação Koa (middlewares e rotas).
// Aqui NÃO há lógica de negócio nem escuta de porta — apenas a composição
// dos componentes. O listen fica no server.js.

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import routes from './routes/index.js';

const app = new Koa();

// Middleware de parsing de JSON no corpo das requisições
app.use(bodyParser());

// Rotas da API, definidas em /routes
app.use(routes.routes());
app.use(routes.allowedMethods());

export default app;
