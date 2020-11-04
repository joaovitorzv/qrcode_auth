import { Router } from 'express';

import usersRouter from './users.routes';
import flightsRouter from './flights.routes';
import ticketsRouter from './tickets.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/flights', flightsRouter);
routes.use('/tickets', ticketsRouter);

export default routes;