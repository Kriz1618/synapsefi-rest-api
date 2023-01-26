import { Handler } from "express";

import { handleError } from "../commons";
import { 
  cancelTransaction,
  createBatchTransactions,
  createTransaction,
  getNodeTransactions,
  getUserTransactions,
  retryTransaction
} from '../services/transations.service';
import { TransactionsParams } from "../types";

export const createNewTransaction: Handler = async (req, res) => {
  try {
    const transactions = await createTransaction(req.body);
    return res.json(transactions);
  } catch (error) {
    return res.status(500).json(handleError(error));
  }
};

export const createTransactions: Handler = async (req, res) => {
  try {
    const transactions = await createBatchTransactions(req.body);
    return res.json(transactions);
  } catch (error) {
    return res.status(500).json(handleError(error));
  }
};

export const deleteTransaction: Handler = async (req, res) => {
  try {
    const transactions = await cancelTransaction(req.params.transactionId, req.body);
    return res.json(transactions);
  } catch (error) {
    return res.status(500).json(handleError(error));
  }
};

export const retryAchTransaction: Handler = async (req, res) => {
  try {
    const response = await retryTransaction(req.params.transactionId, req.body);
    return res.json(response);
  } catch (error) {
    return res.status(500).json(handleError(error));
  }
};

export const pullUserTransactions: Handler = async (req, res) => {
  try {
    const transactions = await getUserTransactions(
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
      { ...req.query, oauth: req.body.oauth } as TransactionsParams,
    );
    return res.json(transactions);
  } catch (error) {
    return res.status(500).json(handleError(error));
  }
};
