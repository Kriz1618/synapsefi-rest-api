import { Router } from "express";

import {
  createNewUser,
  generateOaut,
  getAllUsers,
  getUserData,
  updateUser,
} from "../controllers/users.controller";
import { 
  createUserValidator,
  getUsersValidator,
  updateUserDataValidator
} from "../controllers/users.middleware";

const router = Router();

router.get('/', getUsersValidator, getAllUsers);
router.get('/:userId', getUsersValidator, getUserData);
router.post('/', createUserValidator, createNewUser);
router.patch('/:userId', updateUserDataValidator, updateUser);
router.post('/oauth/:userId',  generateOaut);

export default router;
