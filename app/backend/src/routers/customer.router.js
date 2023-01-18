const express = require('express');
const { createCustomer, getCustomers } = require('../controllers/customer.controller');

const customerRouter = express.Router();

customerRouter.post('/customer', createCustomer);
customerRouter.get('/customer', getCustomers);

module.exports = customerRouter;