import { Handler } from "express";

import { UserQuery } from "../types";
import { handleError } from "../commons";
import {
  createUser,
  generateUserOAuth,
  getUsers,
  getUser,
  updateUserData,
} from '../services/users.service';

export const createNewUser: Handler = async (req, res) => {
  try {
    const response = await createUser(req.body);
    return res.json(response);
  } catch (error) {
    return res.status(500).json(handleError(error));
  }
};

export const getAllUsers: Handler = async (req, res) => {
  try {
    const users = await getUsers(req.query as UserQuery);
    return res.json(users);
  } catch (error) {
    return res.status(500).json(handleError(error));
  }
};

export const getUserData: Handler = async (req, res) => {
  try {
    const user = await getUser(req.params.userId, req.query?.fullData as string);
    return res.json(user);
  } catch (error) {
    return res.status(500).json(handleError(error));
  }
};

export const updateUser: Handler = async (req, res) => {
  try {
    const response = await updateUserData(req.params.userId, req.body);
    return res.json(response);
  } catch (error) {
    return res.status(500).json(handleError(error));
  }
};

export const generateOaut: Handler = async (req, res) => {
  try {
    const { userId } = req.params
    const response = await generateUserOAuth(userId);
    return res.json(response);
  } catch (error) {
    return res.status(500).json(handleError(error));
  }
};
