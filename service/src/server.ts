import 'reflect-metadata';

import express from 'express';
import { createConnection } from 'typeorm';
import cors from 'cors';
import 'express-async-errors';

import routes from './routes';
import errorHandler from './handlers/ErrorHandler';

const main = async () => {
  const conn = await createConnection();
  await conn.runMigrations();

  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(routes);

  app.use(errorHandler);

  app.listen(3333, () => {
    console.log('=> Server running!')
  });
}

main();