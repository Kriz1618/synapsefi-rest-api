import { NextFunction, Request, Response } from "express";
import {
  nodeDataValidator,
  nodesBarcodeValidator,
  nodesDataValidator,
  nodesParamsValidator,
} from "./validators/nodes.validators";

export const getNodesValidator = async (req: Request, res: Response, next: NextFunction) => {
  try {
    nodesParamsValidator.validateAsync(req.query);
    next();
  } catch (error) {
    return res.status(400).json(`Invalid request! ${(error as Error).message}`);
  }
};

export const createNodeValidator = async (req: Request, res: Response, next: NextFunction) => {
  try {
    nodeDataValidator.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json(`Invalid request! ${(error as Error).message}`);
  }
};

export const updateNodeValidator = async (req: Request, res: Response, next: NextFunction) => {
  try {
    nodesDataValidator.validateAsync(req.query);
    next();
  } catch (error) {
    return res.status(400).json(`Invalid request! ${(error as Error).message}`);
  }
};

export const barcodeValidator =  async (req: Request, res: Response, next: NextFunction) => {
  try {
    nodesBarcodeValidator.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json(`Invalid request! ${(error as Error).message}`);
  }
};
