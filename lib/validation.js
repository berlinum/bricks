const Joi = require('@hapi/joi');

//Register validation
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(8).max(1024).required(),
  });
  return schema.validate(data);
};

//Login validation
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(8).max(1024).required(),
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
