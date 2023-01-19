const userService  = require('../services/user.service');
const userValidation = require('../validations/user.validation');

const validateUser = async (req, res) => {
  const { username, password } = req.body;
  const bodyValidation = userValidation.validateBody(username, password);

  if (bodyValidation.type) {  
    return res.status(bodyValidation.type).json({ message: bodyValidation.message });
  }

  const { type, message } = await userService.validateUser(username, password);
  
  if (!type) {    
    return res.status(200).json({ message });
  }
  
  return res.status(type).json({ message })
};

const createUser = async (req, res) => {
  const { username, password } = req.body;

  const bodyValidation = userValidation.validateBody(username, password);

  if (bodyValidation.type) {
  
    return ({ type: bodyValidation.type, message: bodyValidation.message });
  }

  const { type, message } = await userService.createUser(username, password);
  
  if (!type) {    
    return res.status(200).json({ message });
  }
  
  return res.status(type).json({ message })
};

module.exports = {
  validateUser,
  createUser,
}