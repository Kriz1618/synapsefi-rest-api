import { NextFunction, Request, Response } from "express";
import { subscriptionsValidator, updateSubscriptionValidator } from "./validators/subscription.validators";

export const subscribeValidator = async (req: Request, res: Response, next: NextFunction) => {
  try {
    subscriptionsValidator.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json(`Invalid request! ${(error as Error).message}`);
  }
};

export const updateValidator = async (req: Request, res: Response, next: NextFunction) => {
  try {
    updateSubscriptionValidator.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json(`Invalid request! ${(error as Error).message}`);
  }
};
