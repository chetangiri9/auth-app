const { celebrate, Joi } = require("celebrate");

const signUp = celebrate({
  body: Joi.object()
    .keys({
      username: Joi.string().required(),
      password: Joi.string().required(),
      full_name: Joi.string().required(),
      email: Joi.string().required(),
      phone: Joi.string().required(),
    })
    .options({ allowUnknown: true, abortEarly: false }),
});

const signIn = celebrate({
  body: Joi.object()
    .keys({
      username: Joi.string().required(),
      password: Joi.string().required(),
    })
    .options({ allowUnknown: true, abortEarly: false }),
});

module.exports = { signUp, signIn };
