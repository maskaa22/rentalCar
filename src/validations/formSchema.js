import Joi from "joi";

export const formSchema = Joi.object({
  nameUser: Joi.string().min(3).max(30).required().messages({
    "string.empty": "Name cannot be empty.",
    "string.min": "The name must contain at least {#limit} characters",
    "string.max": "The name must not exceed {#limit} characters.",
    "any.required": "Name is required.",
  }),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email cannot be empty.",
      "string.email": "Please enter a valid email.",
      "any.required": "Email is required",
    }),

  date: Joi.date().allow(null).messages({
    "date.base": "Please select a valid date.",
  }),

  comment: Joi.string().max(200).optional().allow("").messages({
    "string.max": "Comment must not exceed {#limit} characters",
  }),
});
