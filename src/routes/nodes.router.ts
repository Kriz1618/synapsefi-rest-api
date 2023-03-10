import { Router } from "express";

import {
  barcodeValidator,
  createNodeValidator,
  getNodesValidator,
  updateNodeValidator,
} from "../controllers/nodes.middleware";
import {
  creatNewNode,
  generateEcashBarcode,
  getNodes,
  pullAtms,
  pullCryptoQuotes,
  pullNodeTypes,
  updateUserNode,
} from "../controllers/nodes.controller";

const router = Router();

router.get('/all/:userId', getNodesValidator, getNodes);
router.get('/crypto-quotes', pullCryptoQuotes);
router.get('/atms', pullAtms);
router.get('/types', pullNodeTypes);
router.post('/:userId', createNodeValidator, creatNewNode);
router.post('/ecash/barcode', barcodeValidator, generateEcashBarcode);
router.patch('/:userId/:nodeId', updateNodeValidator, updateUserNode);

export default router;
