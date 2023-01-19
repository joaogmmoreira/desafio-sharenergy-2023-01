const customerValidation = require('../validations/user.validation');
const customerService = require('../services/customer.service');

const createCustomer = async (req, res) => {
  const { fullName, email, telephone, address, ssn } = req.body.data;

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

const getCustomers = async (_req, res) => {  
  const customers = await customerService.getCustomers();

  return res.status(200).json({ customers })
};

const deleteCustomer = async (req, res) => {
  const id = req.body;
  console.log(id);
  // console.log('req', req);
  
  const deleted = await customerService.deleteCustomer(id);

  return res.status(200).json({ deleted });
};

module.exports = {
  createCustomer,
  getCustomers,
  deleteCustomer,
}