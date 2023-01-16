const loginService  = require('../services/login.service');

const validateLogin = async (req, res) => {
  const { username, password } = req.body;

  const { type, message } = await loginService.validateLogin(username, password);
  
  if (!type) {    
    return res.status(200).json({ message });
  }
  
  return res.status(type).json({ message })
}

module.exports = {
  validateLogin,
}