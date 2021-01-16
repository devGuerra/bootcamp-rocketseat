
import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService'

const sessionsRouter = Router();

/**
 * Repositories = Conexao com banco de dados
 * Services = Regras de Negocios
 */

sessionsRouter.post('/', async (req, res) => {
  try {
    const { email, password } = req.body

    const authenticateUserService = new AuthenticateUserService()

    const { user, token } = await authenticateUserService.execute({
      email,
      password
    })

    delete user.password

    return res.json({ user, token })
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default sessionsRouter;
