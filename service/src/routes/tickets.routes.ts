import { Router } from 'express';

import { getRepository } from 'typeorm';
import Tickets from '../entities/Ticket';

import CreateTicketService from '../services/tickets/createTicketService';
import ValidateTitcketService from '../services/tickets/validateTicketService';
const ticketsRouter = Router();


ticketsRouter.get('/:user_id', async (req, res) => {
  const { user_id } = req.params;
  console.log(user_id);
  const ticketsRepository = getRepository(Tickets);

  const tickets = await ticketsRepository.find({
    where: { user: user_id }
  });

  return res.json(tickets);
});

ticketsRouter.post('/', async (req, res) => {
  const { flight_id, user_id } = req.body;

  const createTicketService = new CreateTicketService();

  const ticket = await createTicketService.execute({
    flight_id,
    user_id
  });

  return res.json(ticket);
})

ticketsRouter.post('/validate/:ticket', async (req, res) => {
  const { ticket } = req.params;

  const validateTicketService = new ValidateTitcketService();

  const isTicketValid = await validateTicketService.execute({
    ticketId: ticket
  });

  return res.json(isTicketValid);
})

export default ticketsRouter;