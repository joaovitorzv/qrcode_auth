import { getRepository } from 'typeorm';

import User from '../../entities/User';

import AppError from '../../errors/AppError';

interface Request {
  name: string;
  email: string;
}

class CreateUserService {
  public async execute({
    name,
    email
  }: Request): Promise<User> {

    if (!email || !name) {
      throw new AppError('Missing name or email');
    }

    const userRepository = getRepository(User);

    const user = userRepository.create({
      name,
      email
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;