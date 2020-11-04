import { getRepository } from 'typeorm';

import User from '../../entities/User';

import AppError from '../../errors/AppError';

interface Request {
  email: string;
}

class ExistsUserService {

}

export default ExistsUserService;