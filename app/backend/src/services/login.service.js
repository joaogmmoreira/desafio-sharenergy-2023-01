const loginValidation = require('../validations/login.validation');
const loginModel = require('../models/login.model');
const jwt = require('../utils/jwt.util');

const validateLogin = async (username, password) => {

  const bodyValidation = loginValidation.validateBody(username, password);

  if (bodyValidation.type) {
    console.log({ type: bodyValidation.type, message: bodyValidation.message })
  
    return ({ type: bodyValidation.type, message: bodyValidation.message });
  }

  // console.log('oi')
 
  // const user = await loginModel.findOne({ where: { username, password } });
  const user = await loginModel.loginModel(username, password);

  if (!user) {
    return ({ type: 400, message: 'Invalid fields' });
  }

  // const { password: _, ...userWithoutPassword } = user.dataValues;

  const token = jwt.createToken(username, password);

  return { type: null, message: token };




}

module.exports = {
  validateLogin,
}