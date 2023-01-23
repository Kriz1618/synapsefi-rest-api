import { Handler } from "express";

import { 
  createUser,
  createNode,
  getUser,
  getUserNodes,
  getUsers,
  updateUserData,
  updateNode,
} from '../services/synapse.service';
import { UserQuery } from "../types";

export const createNewUser: Handler = async (req, res, next) => {
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

export const creatNewNode: Handler = async (req, res) => {
  try {
    const response = await createNode(req.params.userId, req.body);
    return res.json(response);
  } catch (error) {
    return res.status(500).json(handleError(error));
  }
};

export const getNodes: Handler = async (req, res) => {
  try {
    const nodes = await getUserNodes(req.params.userId, req.query);
    return res.json(nodes);
  } catch (error) {
    return res.status(500).json(handleError(error));
  }
};

export const updateUserNode: Handler = async (req, res) => {
  try {
    const { userId, nodeId } = req.params
    const response = await updateNode(userId, nodeId, req.body);
    return res.json(response);
  } catch (error) {
    return res.status(500).json(handleError(error));
  }
};

const handleError = (error: any) => {
  if (error?.response?.data) {
    return error.response.data;
  } else if (error instanceof Error) {
    return { error: error.message };
  }

  return `Internal error - ${error}`;
};
