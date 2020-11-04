import { Router } from 'express';

import { getRepository } from 'typeorm';
import User from '../entities/User';

import CreateUserService from '../services/user/createUserService';

const usersRouter = Router();

usersRouter.get('/', async (_, res) => {
  return res.json({
    fodas: 'true'
  });
});

usersRouter.get('/exists', async (req, res) => {
  const { email } = req.body;

  const userRepository = getRepository(User);

  const user = await userRepository.findOne({ where: { email } });

  if (!user?.email) {
    return res.json({ userExists: false })
  }

  return res.json(user);
});

usersRouter.post('/create', async (req, res) => {
  const { name, email } = req.body;

  const createUserService = new CreateUserService();
  await createUserService.execute({
    name,
    email
  });

  return res.status(201).send()
});

export default usersRouter;