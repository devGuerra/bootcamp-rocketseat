
import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService'

const sessionsRouter = Router();

/**
 * Repositories = Conexao com banco de dados
 * Services = Regras de Negocios
 */

sessionsRouter.post('/', async (req, res) => {
  const { email, password } = req.body

  const authenticateUserService = new AuthenticateUserService()

  const { user, token } = await authenticateUserService.execute({
    email,
    password
  })

  delete user.password

  return res.json({ user, token })
});

export default sessionsRouter;
