import { Activity } from '../services/bored-api-client.types';
import { UserService } from '../services/user.service';
import { BoredApiClientService } from '../services/bored-api-client.service';
import { Request, Response } from 'express';

const activityService: UserService = new UserService();

export const getActivity = async (req: Request, res: Response): Promise<Response> => {
    const user = await activityService.findOne();

    if (user) {
        return res.json(user);
    }

    const activity: Activity = await BoredApiClientService.getRandomActivity();

    // Remap values
    return res.json({
        activity: activity.activity,
        accessibility: BoredApiClientService.mapAccessibility(activity.accessibility),
        type: activity.type,
        participants: activity.participants,
        price: BoredApiClientService.mapPrice(activity.price),
        link: activity.link,
        key: activity.key
    });
}



