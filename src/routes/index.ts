import { Express } from 'express';
import synapseRoutes from './synapse.router';
import healthCheck from './healthCheck';
import authMiddelware from '../controllers/authentication';


export default (app: Express) => {
  app.use('/api', authMiddelware, synapseRoutes);
  app.use('/healthcheck', healthCheck);
};
