import { NextFunction, Request, Response } from "express";

import {
  batchTransactionsValidator,
  nodeTransQueryValidator,
  transactionQueryValidator,
  transactionValidator,
  updateTransactionValidator,
  userTransQueryValidator,
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

export const createTransactionValidator = async (req: Request, res: Response, next: NextFunction) => {
  try {
    transactionValidator.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json(`Invalid request! ${(error as Error).message}`);
  }
};

export const createBatchTransactionsValidator = async (req: Request, res: Response, next: NextFunction) => {
  try {
    batchTransactionsValidator.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json(`Invalid request! ${(error as Error).message}`);
  }
};

export const modifyTransactionValidator = async (req: Request, res: Response, next: NextFunction) => {
  try {
    updateTransactionValidator.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json(`Invalid request! ${(error as Error).message}`);
  }
};
