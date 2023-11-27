import { Router } from 'express'
import { addUser } from '../controllers/user.constroller';

class UserRoutes {
  router = Router();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post('/', addUser);
  }
}

export default new UserRoutes().router;

