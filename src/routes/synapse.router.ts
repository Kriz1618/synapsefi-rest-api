import { NextFunction, Request, Response, Router } from "express";

import {
  createNewUser,
  creatNewNode,
  getAllUsers,
  getUserData,
  getNodes,
  updateUser,
  updateUserNode,
} from "../controllers/synapse.controller";
import {
  nodeDataValidator,
  nodesParamsValidator,
  userBodyValidator,
  userDataValidator,
  userParamsValidator,
  nodesDataValidator
} from "./validators";

const router = Router();

router.get(
  '/users',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      userParamsValidator.validateAsync(req.query);
      next();
    } catch (error) {
      return res.status(400).json(`Invalid request! ${(error as Error).message}`);
    }
  },
  getAllUsers,
);

router.get(
  '/users/:userId',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      userParamsValidator.validateAsync(req.query);
      next();
    } catch (error) {
      return res.status(400).json(`Invalid request! ${(error as Error).message}`);
    }
  },
  getUserData,
);

router.post(
  '/users',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      userBodyValidator.validateAsync(req.body);
      next();
    } catch (error) {
      return res.status(400).json(`Invalid request! ${(error as Error).message}`);
    }
  },
  createNewUser
);

router.patch(
  '/users/:userId',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      userDataValidator.validateAsync({ ...req.params, ...req.body });
      next();
    } catch (error) {
      return res.status(400).json(`Invalid request! ${(error as Error).message}`);
    }
  },
  updateUser,
);

router.post(
  '/nodes/:userId',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      nodeDataValidator.validateAsync(req.body);
      next();
    } catch (error) {
      return res.status(400).json(`Invalid request! ${(error as Error).message}`);
    }
  },
  creatNewNode,
);

router.get(
  '/nodes/:userId',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      nodesParamsValidator.validateAsync(req.query);
      next();
    } catch (error) {
      return res.status(400).json(`Invalid request! ${(error as Error).message}`);
    }
  },
  getNodes,
);

router.patch(
  '/nodes/:userId/:nodeId',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      nodesDataValidator.validateAsync(req.query);
      next();
    } catch (error) {
      return res.status(400).json(`Invalid request! ${(error as Error).message}`);
    }
  },
  updateUserNode,
);

export default router;
