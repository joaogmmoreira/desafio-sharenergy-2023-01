const customerModel = require('../models/customer.model');

const createCustomer = async (fullName, email, telephone, address, ssn) => {
  const customerCheck = await customerModel.findOne({ fullName, ssn });

  if (customerCheck) {
    return { type: 400, message: 'This customer already exists' };
  }

  const customer = await customerModel.create({ fullName, email, telephone, address, ssn });

  return { type: null, message: customer };
};

const getCustomers = async () => {
  const customers = await customerModel.find({});

  return { type: null, customers };
}

module.exports = {
  createCustomer,
  getCustomers,
};
