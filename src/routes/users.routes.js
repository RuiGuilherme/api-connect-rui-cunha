// src/routes/users.routes.js
// Responsabilidade: definir as rotas HTTP do recurso /users (método + path)
// e delegar o processamento ao controller. Não contém lógica de negócio.

import Router from '@koa/router';
import * as usersController from '../controllers/users.controller.js';

const router = new Router();

router.get('/users', usersController.list);
router.get('/users/:id', usersController.getById);
router.post('/users', usersController.create);
router.put('/users/:id', usersController.update);
router.delete('/users/:id', usersController.remove);

export default router;
