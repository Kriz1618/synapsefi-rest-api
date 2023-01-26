import Joi from "joi";

const queryParams = {
  page: Joi.string().pattern(/^[0-9]+$/),
  pageSize: Joi.string().pattern(/^[0-9]+$/),
  oauth: Joi.string(),
};

export const userTransQueryValidator = Joi.object({
  ...queryParams,
});

export const nodeTransQueryValidator = Joi.object({
  ...queryParams,
  nodeId: Joi.string(),
  transactioId: Joi.string(),
});

export const transactionQueryValidator = Joi.object({
  ...queryParams,
  nodeId: Joi.string(),
  transactioId: Joi.string(),
});

