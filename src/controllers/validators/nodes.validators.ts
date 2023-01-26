import Joi from "joi";

const nodeTypes = Joi.string().valid(
  'ACH-US',
  'CARD-US',
  'CHECK-US',
  'CLEARING-US',
  'CMA',
  'CRYPTO-US',
  'CUSTODY-US',
  'DEPOSIT-US',
  'IB-DEPOSIT-US',
  'IB-SUBACCOUNT-US',
  'IC-DEPOSIT-US',
  'INTERCHANGE-US',
  'IOU',
  'LOAN-RESERVE-US',
  'LOAN-US',
  'REPAY-US',
  'RESERVE-US',
  'RPPS-US',
  'SUBACCOUNT-US',
  'SUBCARD-US',
  'SYNAPSE-US',
  'TRADE-US',
  'TRIUMPH-SUBACCOUNT-US',
  'WIRE-INT',
  'WIRE-US'
);

export const nodeDataValidator = Joi.object({
  oauth: Joi.string().required(),
  type: nodeTypes.required(),
  info: Joi.object({
    nickname: Joi.string().required(),
    document_id: Joi.string(),
    custody: Joi.string(),
    risk: Joi.string(),
    loan_type: Joi.string(),
    swift: Joi.string(),
    biller_id: Joi.string(),
    payee_name: Joi.string(),
    account_num: Joi.string(),
    routing_num: Joi.string(),
    card_number: Joi.string(),
    exp_date: Joi.string(),
    type: Joi.string(),
    class: Joi.string(),
    credit_limit: Joi.object({
      amount: Joi.number(),
      currency: Joi.string()
    }),
    interest: Joi.object({
      apr: Joi.number(),
      cap: Joi.number()
    }),
    payee_address: Joi.object({
      address_street: Joi.string(),
      address_city: Joi.string(),
      address_subdivision: Joi.string(),
      address_country_code: Joi.string(),
      address_postal_code: Joi.string()
    }),
    payment_node_id: Joi.string(),
    schedule: Joi.string(),
    next_payment: Joi.number(),
    num_payments: Joi.number(),
    reserve_node_id: Joi.string(),
    disbursement_node_id: Joi.string(),
    auto_pay: Joi.boolean(),
  }).required(),
  preview_only: Joi.boolean()
});

export const nodesParamsValidator = Joi.object({
  page: Joi.string()
    .pattern(/^[0-9]+$/)
    .custom((value) => { return Number(value) }),
  pageSize: Joi.string().pattern(/^[0-9]+$/),
  type: nodeTypes
});

export const nodesDataValidator = Joi.object({
  allowed: Joi.string(),
  allowed_status_code: Joi.string(),
  payment_node_id: Joi.string(),
  next_payment: Joi.string(),
  auto_pay: Joi.boolean(),
  reauth: Joi.string(),
  micro: Joi.array().items(Joi.number()),
  resend_micro: Joi.string()
});

export const nodesBarcodeValidator = Joi.object({
  userId: Joi.string().required(),
  nodeId: Joi.string().required(),
  amount: Joi.number().required(),
  currency: Joi.string().required(),
  retailerId: Joi.number().required(),
  oauth: Joi.string().required(),
});
