import { getRepository } from 'typeorm';
import { v4 } from 'uuid';

import Ticket from '../../entities/Ticket';
import Flight from '../../entities/Flight';
import User from '../../entities/User';

import AppError from '../../errors/AppError';

interface Request {
  user_id: number;
  flight_id: number;
};

class CreateTicketService {
  public async execute({
    user_id,
    flight_id
  }: Request): Promise<Ticket> {
    if (!user_id || !flight_id) {
      throw new AppError('Missing userID or FlightID');
    }

    const ticketRepository = getRepository(Ticket);
    const userRepository = getRepository(User);
    const flightRepository = getRepository(Flight);

    const user = await userRepository.findOne(user_id);
    const flight = await flightRepository.findOne(flight_id);

    const ticketId = v4();

    const ticket = ticketRepository.create({
      user,
      flight,
      ticketId
    });

    await ticketRepository.save(ticket);

    return ticket;
  }
}

export default CreateTicketService;
