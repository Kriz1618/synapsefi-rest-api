import Joi from "joi";

export const subscriptionsValidator = Joi.object({
  scope: Joi.array()
    .items(Joi.string().valid(
      "USERS|POST",
      "USER|PATCH",
      "NODES|POST",
      "NODE|PATCH",
      "TRANS|POST",
      "TRAN|PATCH",
      "SUBNETS|POST",
      "SUBNET|PATCH"
    )).required(),
  url: Joi.string().uri(),
  oauth: Joi.string()
});

export const updateSubscriptionValidator = Joi.object({
  is_active: Joi.boolean(),
  oauth: Joi.string()
});
