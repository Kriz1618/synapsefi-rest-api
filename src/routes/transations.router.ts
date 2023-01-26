import { Router } from "express";

import {
  getTransaction,
  pullNodeTransactions,
  pullUserTransactions,
  createNewTransaction,
  createTransactions,
  deleteTransaction,
  retryAchTransaction,
} from "../controllers/transactions.controller";
import {
  createBatchTransactionsValidator,
  createTransactionValidator,
  getNodeTransactionsValidator,
  getTransactionsValidator,
  getUserTransactionsValidator,
  modifyTransactionValidator
} from "../controllers/transactions.middleware";

const router = Router();

router.get('/user', getUserTransactionsValidator, pullUserTransactions);
router.get('/node', getNodeTransactionsValidator, pullNodeTransactions);
router.get('/trans', getTransactionsValidator, getTransaction);
router.post('/', createTransactionValidator, createNewTransaction);
router.post('/batch', createBatchTransactionsValidator, createTransactions);
router.patch('/:transactionId', modifyTransactionValidator, retryAchTransaction);
router.delete('/:transactionId', modifyTransactionValidator, deleteTransaction);

export default router;
