// src/routes/index.js
// Responsabilidade: agregar todos os módulos de rotas em um único Router
// que é exposto para a aplicação (central de rotas / registrar rotas).

import Router from '@koa/router';
import usersRoutes from './users.routes.js';

const router = new Router();

// Monta as rotas de usuários no router principal
router.use(usersRoutes.routes(), usersRoutes.allowedMethods());

export default router;
