import {NextFunction, Request, Response} from 'express';

export const catchErrors = (handler: any) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await handler(req, res, next);
        } catch (error) {
            // Handle the error
            console.error('Error caught: ', error);
            return res.status(500).json({ error: 'Internal server error'})
        }
    }
}
