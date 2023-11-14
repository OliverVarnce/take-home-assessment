import { type Request, type Response } from 'express'

class IndexController {
  getIndex (req: Request, res: Response): void {
    res.send('Hi Dear!')
  }
}

export default new IndexController()
