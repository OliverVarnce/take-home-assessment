import { Request, Response } from 'express';

export const getHome = (req: Request, res: Response): Response => {
    return res.json({ message: 'Welcome to home assessment application.' });
}
