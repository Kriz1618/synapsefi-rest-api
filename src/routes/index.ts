import { Express } from 'express';
import healthCheck from './healthCheck';
import authMiddelware from '../controllers/authentication';
import userRouter from './users.router';
import nodesRouter from './nodes.router';
import transationsRouter from './transations.router'

export default (app: Express) => {
  app.use('/api/users', authMiddelware, userRouter);
  app.use('/api/nodes', authMiddelware, nodesRouter);
  app.use('/api/transactions', authMiddelware, transationsRouter);
  app.use('/healthcheck', healthCheck);
};
