const customerValidation = require('../validations/user.validation');
const customerService = require('../services/customer.service');

const createCustomer = async (req, res) => {
  const { fullName, email, telephone, address, ssn } = req.body;

  const bodyValidation = customerValidation.validateBody(fullName, email, telephone, address, ssn);

  if (bodyValidation.type) {
  
    return ({ type: bodyValidation.type, message: bodyValidation.message });
  }

  const { type, message } = await customerService.createCustomer(fullName, email, telephone, address, ssn);
  
  if (!type) {    
    return res.status(200).json({ message });
  }
  
  return res.status(type).json({ message })
};

const getCustomers = async (req, res) => {
  const { authorization } = req.headers;
  console.log(authorization);
  const customers = await customerService.getCustomers();

  return res.status(200).json({ customers })
};

module.exports = {
  // validateUser,
  createCustomer,
  getCustomers,
}