import Joi from "joi";

export const userParamsValidator = Joi.object({
  oauth: Joi.string(),
  page: Joi.string()
    .pattern(/^[0-9]+$/)
    .custom((value) => { return Number(value) }),
  pageSize: Joi.string().pattern(/^[0-9]+$/),
  showTokens: Joi.string().valid('yes', 'no'),
  fullData: Joi.string().valid('yes', 'no'),
});

const documentParams = {
  document_value: Joi.string(),
  document_type: Joi.string(),
  meta: Joi.object({
    country_code: Joi.string(),
    state_code: Joi.string(),
    address_street: Joi.string(),
    address_city: Joi.string(),
    address_subdivision: Joi.string(),
    address_postal_code: Joi.string(),
    address_country_code: Joi.string(),
    address_care_of: Joi.string(),
  })
};

const userDocumentParams = {
  email: Joi.string(),
  phone_number: Joi.string(),
  ip: Joi.string(),
  name: Joi.string(),
  alias: Joi.string(),
  entity_type: Joi.string(),
  entity_scope: Joi.string(),
  day: Joi.number(),
  month: Joi.number(),
  year: Joi.number(),
  address_street: Joi.string(),
  address_city: Joi.string(),
  address_subdivision: Joi.string(),
  address_postal_code: Joi.string(),
  address_country_code: Joi.string(),
  virtual_docs: Joi.array().items(Joi.object(documentParams)),
  physical_docs: Joi.array().items(Joi.object(documentParams)),
  social_docs: Joi.array().items(Joi.object(documentParams)),
}

export const userDocumentValidator = Joi.object(userDocumentParams);

const loginParams = {
  email: Joi.string().required(),
  password: Joi.string()
}

export const userBodyValidator = Joi.object({
  oauth: Joi.string(),
  logins: Joi.array().items(Joi.object(loginParams)),
  phone_numbers: Joi.array().items(Joi.string()).required(),
  legal_names: Joi.array().items(Joi.string()).required(),
  documents: Joi.array().items(userDocumentValidator),
  extra: Joi.object({
    supp_id: Joi.string(),
    cip_tag: Joi.number(),
    is_business: Joi.boolean()
  })
});

export const userDataValidator = Joi.object({
  oauth: Joi.string(),
  userId: Joi.string().required(),
  documents: Joi.array().items(Joi.object({ ...userDocumentParams, id: Joi.string() })),
  permission: Joi.string(),
  permission_code: Joi.string(),
  update: Joi.object(),
});


const nodeTypes = Joi.string().valid(
  'ACH-US',
  'CHECK-US',
  'CLEARING-US',
  'CMA',
  'CRYPTO-US',
  'CUSTODY-US',
  'DEPOSIT-US',
  'IC-DEPOSIT-US',
  'LOAN-RESERVE-US',
  'LOAN-US',
  'ONE-TIME',
  'OPEN',
  'REPAY-US',
  'REVOLVING',
  'SUBACCOUNT-US',
  'WIRE-INT',
  'WIRE-US'
);

export const nodeDataValidator = Joi.object({
  oauth: Joi.string(),
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