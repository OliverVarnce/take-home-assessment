import { Application } from 'express';
import { catchErrors } from '../decorators/exceptionHanlder';
import homeRoutes from './home.routes';
import activityRoutes from './activity.routes';
import userRoutes from './user.routes';

export default class Routes {
    constructor(app: Application) {
        app.use('/', catchErrors(homeRoutes));
        app.use('/activity', catchErrors(activityRoutes));
        app.use('/user', catchErrors(userRoutes));
    }
}
