import { getRepository } from 'typeorm';

import Ticket from '../../entities/Ticket';

import AppError from '../../errors/AppError';

interface Request {
  ticketId: string;
}

class ValidateTicketService {
  public async execute({ ticketId }: Request): Promise<Ticket> {

    const ticketRepository = getRepository(Ticket);

    const ticket = await ticketRepository.findOne({
      where: { ticketId }
    });

    if (!ticket) {
      throw new AppError('Ticket not found', 404);
    }

    if (ticket.expired) {
      throw new AppError('Ticket validation expired', 401);
    }

    ticket.expired = true;
    ticket.validatedDate = new Date();
    await ticketRepository.save(ticket);

    return ticket;
  }
}

export default ValidateTicketService;