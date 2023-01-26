import { Handler } from "express";

import { handleError } from "../commons";
import {
  createSubscription,
  getSubscriptionLogs,
  getSubscriptions,
  updateSubscription
} from "../services/subscriptions.service.ts";

export const creatSubscriptions: Handler = async (req, res) => {
  try {
    const response = await createSubscription(req.body);
    return res.json(response);
  } catch (error) {
    return res.status(500).json(handleError(error));
  }
};

export const pullSubscriptions: Handler = async (req, res) => {
  try {
    const subscriptions = await getSubscriptions(req.params.subscriptionId);
    return res.json(subscriptions);
  } catch (error) {
    return res.status(500).json(handleError(error));
  }
};

export const getLogs: Handler = async (req, res) => {
  try {
    const response = await getSubscriptionLogs();
    return res.json(response);
  } catch (error) {
    return res.status(500).json(handleError(error));
  }
};


export const modifySubscription: Handler = async (req, res) => {
  try {
    const response = await updateSubscription(req.params.subscriptionId, req.body);
    return res.json(response);
  } catch (error) {
    return res.status(500).json(handleError(error));
  }
};
