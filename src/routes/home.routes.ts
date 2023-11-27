import { Router } from 'express';
import { getHome } from '../controllers/home.controller';

class HomeRoutes {
    router = Router();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get('/', getHome);
    }
}

export default new HomeRoutes().router;
