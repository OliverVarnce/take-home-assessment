import { Router } from 'express';
import { getActivity } from '../controllers/activity.controller';

class ActivityRoutes {
  router = Router();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get('/', getActivity);
  }
}

export default new ActivityRoutes().router;
