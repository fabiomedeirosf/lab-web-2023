const Joi = require('joi');

const postFood = {
    payload: Joi.object({
        description: Joi
                    .string()
                    .min(3)
                    .max(50)
                    .required(),
        value: Joi
              .number()
              .precision(2)
              .required()
    }).required()
};

module.exports = {postFood};