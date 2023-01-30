import { Handler } from "express";

import { handleError } from "../commons";
import {
  createNode,
  getUserNodes,
  updateNode,
  createEcashBarcode,
  getNodeTypes,
  getAtms,
  getCryptoQuotes
} from '../services/nodes.service';

export const creatNewNode: Handler = async (req, res) => {
  try {
    const response = await createNode(req.params.userId, req.body);
    return res.json(response);
  } catch (error) {
    return res.status(500).json(handleError(error));
  }
};

export const pullNodeTypes: Handler = async (req, res) => {
  try {
    const nodes = await getNodeTypes();
    return res.json(nodes);
  } catch (error) {
    return res.status(500).json(handleError(error));
  }
};

export const getNodes: Handler = async (req, res) => {
  try {
    const nodes = await getUserNodes(req.params.userId, req.query, req.body.oauth);
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

export const generateEcashBarcode: Handler = async (req, res) => {
  try {
    const response = await createEcashBarcode(req.body);
    return res.json(response);
  } catch (error) {
    return res.status(500).json(handleError(error));
  }
};

export const pullCryptoQuotes: Handler = async (req, res) => {
  try {
    const response = await getCryptoQuotes();
    return res.json(response);
  } catch (error) {
    return res.status(500).json(handleError(error));
  }
};

export const pullAtms: Handler = async (req, res) => {
  try {
    const response = await getAtms();
    return res.json(response);
  } catch (error) {
    return res.status(500).json(handleError(error));
  }
};
