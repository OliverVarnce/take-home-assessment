import { type Request, type Response } from 'express'
import prisma from '../services/prisma/prisma.service'
import { type User } from '@prisma/client'

class UserController {
  async createUser (req: Request, res: Response): Promise<void> {
    const { name, accessibility, price } = req.body

    try {
      // Store user profile in the database
      const user: User = await prisma.user.create({
        data: {
          name,
          accessibility,
          price
        }
      })

      res.json(user)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
}

export default new UserController()
