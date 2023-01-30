import { Router } from 'express';
import UsersController from './controllers/user.controller';

import errorHandler from './middleware/error-handler';

const routes = new Router();

// Users
routes.post('/api/users/register', UsersController.register);
routes.post('/api/users/login', UsersController.login);

routes.use(errorHandler);

export default routes;
