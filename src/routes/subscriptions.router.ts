import { Router } from "express";
import { subscribeValidator, updateValidator } from "../controllers/subscription.middleware";
import {
  creatSubscriptions,
  getLogs,
  modifySubscription,
  pullSubscriptions,
} from "../controllers/subscription.controller";

const router = Router();

router.get('/', pullSubscriptions);
router.get('/logs', getLogs);
router.get('/:subscriptionId', pullSubscriptions);
router.post('/', subscribeValidator, creatSubscriptions);
router.patch('/:subscriptionId', updateValidator, modifySubscription);

export default router;
