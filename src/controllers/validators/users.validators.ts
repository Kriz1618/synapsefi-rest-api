import Joi from "joi";

export const userParamsValidator = Joi.object({
  oauth: Joi.string().required(),
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
  oauth: Joi.string().required(),
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
  oauth: Joi.string().required(),
  userId: Joi.string().required(),
  documents: Joi.array().items(Joi.object({ ...userDocumentParams, id: Joi.string() })),
  permission: Joi.string(),
  permission_code: Joi.string(),
  update: Joi.object(),
});
