import { NextFunction, Request, Response } from "express";

import {
  userTransQueryValidator,
  nodeTransQueryValidator,
  transactionQueryValidator,
} from "./validators/transactions.validators";

export const getUserTransactionsValidator = async (req: Request, res: Response, next: NextFunction) => {
  try {
    userTransQueryValidator.validateAsync(req.query);
    next();
  } catch (error) {
    return res.status(400).json(`Invalid request! ${(error as Error).message}`);
  }
};

export const getNodeTransactionsValidator = async (req: Request, res: Response, next: NextFunction) => {
  try {
    nodeTransQueryValidator.validateAsync(req.query);
    next();
  } catch (error) {
    return res.status(400).json(`Invalid request! ${(error as Error).message}`);
  }
};

export const getTransactionsValidator = async (req: Request, res: Response, next: NextFunction) => {
  try {
    transactionQueryValidator.validateAsync(req.query);
    next();
  } catch (error) {
    return res.status(400).json(`Invalid request! ${(error as Error).message}`);
  }
};
