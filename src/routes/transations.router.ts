import { Router } from "express";

import {
  getTransaction,
  pullNodeTransactions,
  pullUserTransactions,

} from "../controllers/transactions.controller";
import {
  getUserTransactionsValidator,
  getNodeTransactionsValidator,
  getTransactionsValidator,
} from "../controllers/transactionsValidators.controller";

const router = Router();

router.get('/user/:userId', getUserTransactionsValidator, pullUserTransactions);
router.get('/node/:userId', getNodeTransactionsValidator, pullNodeTransactions);
router.get('/trans/:userId/trans', getTransactionsValidator, getTransaction);

export default router;
