import { NextFunction, Request, Response } from "express";
import { userBodyValidator, userDataValidator, userParamsValidator } from "./validators/users.validators";

export const getUsersValidator = async (req: Request, res: Response, next: NextFunction) => {
  try {
    userParamsValidator.validateAsync(req.query);
    next();
  } catch (error) {
    return res.status(400).json(`Invalid request! ${(error as Error).message}`);
  }
};

export const createUserValidator = async (req: Request, res: Response, next: NextFunction) => {
  try {
    userBodyValidator.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json(`Invalid request! ${(error as Error).message}`);
  }
};

export const updateUserDataValidator = async (req: Request, res: Response, next: NextFunction) => {
  try {
    userDataValidator.validateAsync({ ...req.params, ...req.body });
    next();
  } catch (error) {
    return res.status(400).json(`Invalid request! ${(error as Error).message}`);
  }
};

