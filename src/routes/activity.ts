import { type Request, type Response } from 'express';
import { type Activity, type MappedActivity } from '../services/bored-api-client/bored-api-client.types';
import BoredApiClientService from '../services/bored-api-client/bored-api-client.service';
import prisma from '../services/prisma/prisma.service';

class ActivityController {
  async getActivity (req: Request, res: Response): Promise<void> {
    const user = await prisma.user.findFirst({
      select: {
        name: true,
        accessibility: true,
        price: true
      }
    });

    try {
      if (user) {
        // If the user exists, return user details
        res.json(user);
      } else {
        const activity: Activity = await BoredApiClientService.getRandomActivity();

        // Remap values
        const mappedActivity: MappedActivity = {
          activity: activity.activity,
          accessibility: BoredApiClientService.mapAccessibility(activity.accessibility),
          type: activity.type,
          participants: activity.participants,
          price: BoredApiClientService.mapPrice(activity.price),
          link: activity.link,
          key: activity.key
        }

        res.json(mappedActivity);
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default new ActivityController();
