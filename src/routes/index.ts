import { Express } from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

import healthCheck from './healthCheck';
import authMiddelware from '../controllers/authentication';
import userRouter from './users.router';
import nodesRouter from './nodes.router';
import transationsRouter from './transations.router';
import subscriptionRouter from './subscriptions.router';
import { options } from '../docs/swaggerOptions';

export default (app: Express) => {
  const specs = swaggerJsDoc(options);
  app.use('/documentation', swaggerUI.serve, swaggerUI.setup(specs));
  app.use('/api/users', authMiddelware, userRouter);
  app.use('/api/nodes', authMiddelware, nodesRouter);
  app.use('/api/transactions', authMiddelware, transationsRouter);
  app.use('/api/subscriptions', authMiddelware, subscriptionRouter);
  app.use('/healthcheck', healthCheck);
};
