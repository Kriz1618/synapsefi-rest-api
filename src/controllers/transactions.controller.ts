import { Handler } from "express";

import { handleError } from "../commons";
import { 
  getNodeTransactions,
  getUserTransactions  
} from '../services/transations.service';
import { TransactionsParams } from "../types";

export const pullUserTransactions: Handler = async (req, res) => {
  try {
    const transactions = await getUserTransactions(
      req.params.userId,
      { ...req.query, oauth: req.body.oauth } as TransactionsParams,
    );
    return res.json(transactions);
  } catch (error) {
    return res.status(500).json(handleError(error));
  }
};

export const getTransaction: Handler = async (req, res) => {
  try {
    const transactions = await getNodeTransactions(
      req.params.userId,
      { ...req.query, oauth: req.body.oauth } as TransactionsParams,
    );
    return res.json(transactions);
  } catch (error) {
    return res.status(500).json(handleError(error));
  }
};

export const pullNodeTransactions: Handler = async (req, res) => {
  try {
    const transactions = await getNodeTransactions(
      req.params.userId,
      { ...req.query, oauth: req.body.oauth } as TransactionsParams,
    );
    return res.json(transactions);
  } catch (error) {
    return res.status(500).json(handleError(error));
  }
};
