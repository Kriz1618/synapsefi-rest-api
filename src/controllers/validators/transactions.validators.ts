import Joi from "joi";

const queryParams = {
  page: Joi.string().pattern(/^[0-9]+$/),
  pageSize: Joi.string().pattern(/^[0-9]+$/),
  oauth: Joi.string(),
  userId: Joi.string().required(),
};

export const userTransQueryValidator = Joi.object({
  ...queryParams,
});

export const nodeTransQueryValidator = Joi.object({
  ...queryParams,
  nodeId: Joi.string(),
});

export const transactionQueryValidator = Joi.object({
  ...queryParams,
  nodeId: Joi.string(),
  transactioId: Joi.string(),
});

const transactionObj = {
  to: Joi.object({
    type: Joi.string().required(),
    id: Joi.string().required(),
  }).required(),
  amount: Joi.object({
    amount: Joi.number().required(),
    currency: Joi.string().required()
  }).required(),
  extra: Joi.object({
    ip: Joi.string(),
    note: Joi.string()
  }).required(),
  from: Joi.object({
    type: Joi.string(),
    id: Joi.string(),
  }).optional()
};

const transactionConst = {
  oauth: Joi.string().required(),
  userId: Joi.string().required(),
  nodeId: Joi.string().required(),
};

export const transactionValidator = Joi.object({
  ...transactionConst,
  ...transactionObj
});

export const batchTransactionsValidator = Joi.object({
  ...transactionConst,
  transactions: Joi.array().items(Joi.object(transactionObj))
});

export const updateTransactionValidator = Joi.object(transactionConst);