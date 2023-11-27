import { Request, Response } from 'express'
import { UserService } from '../services/user.service';


export const addUser = async (req: Request, res: Response): Promise<Response> => {
    const userService = new UserService();
    const { name, accessibility, price } = req.body;

    // Body validation
    if (!name || !accessibility || !price) {
        return res.status(400).json({message: 'Bad request!'});
    }

    return res.json(await userService.create(req.body));
}



