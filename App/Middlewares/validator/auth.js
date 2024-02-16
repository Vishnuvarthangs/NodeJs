const Joi = require('joi');

 //User-defined function to validate the Signup user 
function validateSignup(user) {
  const JoiSchema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
 
    account_status: Joi.string()
      .valid('activated')
      .valid('unactivated')
      .optional(),
  }).options({ abortEarly: false });
 
  return JoiSchema.validate(user)
}

 //User-defined function to validate the Login user 
function validateLogin(user) {
  const JoiSchema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),

    account_status: Joi.string()
      .valid('activated')
      .valid('unactivated')
      .optional(),
  }).options({ abortEarly: false });
 
  return JoiSchema.validate(user)
}

exports.validateSignup = validateSignup;
exports.validateLogin = validateLogin;