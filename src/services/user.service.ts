import { Activity } from './activity.types';
import { User } from '@prisma/client';
import prisma from './prisma.service';

export class UserService {
    findOne(): Promise<Activity | null> {
        return prisma.user.findFirst({
            select: {
                name: true,
                accessibility: true,
                price: true
            }
        });
    }

    create(user: User): Promise<User> {
        return prisma.user.create({
            data: { ...user }
        });
    }
}
