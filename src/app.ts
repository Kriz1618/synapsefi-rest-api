import express from "express";
import morgan from "morgan";
import cors from "cors";
import * as dotenv from 'dotenv';
dotenv.config();

import applyRoutes from './routes';

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

applyRoutes(app);

export default app;
