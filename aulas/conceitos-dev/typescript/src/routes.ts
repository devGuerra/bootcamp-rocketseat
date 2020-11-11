import { Request, Response } from 'express'

import createUser from './services/CreateUser'

export function helloWorld(req: Request, res: Response) {
  const user = createUser({
    name: 'Diego',
    email: 'diego@rocketseat.com',
    password: '123456',
    techs: [
      'node', 'react',
      {
        title: "Javascript",
        experience: 100
      }
    ]
  })

  return res.json({ message: "Hello World" })
}