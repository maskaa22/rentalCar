import Joi from 'joi';

export const formSchema = Joi.object({
  nameUser: Joi.string()
    .min(3)
    .max(30)
    .required()
    .messages({
      'string.empty': 'Ім\'я не може бути порожнім',
      'string.min': 'Ім\'я повинно містити принаймні {#limit} символи',
      'string.max': 'Ім\'я не повинно перевищувати {#limit} символів',
      'any.required': 'Ім\'я є обов\'язковим',
    }),

  email: Joi.string()
    .email({ tlds: { allow: false } }) // { allow: false } дозволяє ігнорувати TLD (top-level domains)
    .required()
    .messages({
      'string.empty': 'Email не може бути порожнім',
      'string.email': 'Введіть дійсний email',
      'any.required': 'Email є обов\'язковим',
    }),

  date: Joi.string()
    .optional() // Це поле не є обов'язковим
    .allow('') // Дозволити порожній рядок
    .messages({
      // 'string.pattern.base': 'Будь ласка, введіть дату у форматі РРРР-ММ-ДД.'
    }),

  comment: Joi.string()
    .max(500)
    .optional() // Це поле не є обов'язковим
    .allow('') // Дозволити порожній рядок
    .messages({
      'string.max': 'Коментар не повинен перевищувати {#limit} символів',
    }),
});