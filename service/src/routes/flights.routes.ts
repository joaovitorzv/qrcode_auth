import { Router } from 'express';

import { getRepository } from 'typeorm';
import Flight from '../entities/Flight';

const flightsRouter = Router();


flightsRouter.get('/available', async (_, res) => {
  const flightsRepository = getRepository(Flight);

  const flights = await flightsRepository.find();

  return res.json(flights);
});

export default flightsRouter;