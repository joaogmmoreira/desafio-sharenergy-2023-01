const express = require('express');
const { createCustomer, getCustomers, deleteCustomer } = require('../controllers/customer.controller');
const { verifyToken } = require('../utils/jwt.util');

const customerRouter = express.Router();

customerRouter.get('/customers', (req, res, next) => {
  verifyToken(req, res, next);
}, (req, res) => {
  getCustomers(req, res);
});

customerRouter.post('/customers', (req, res, next) => {
  verifyToken(req, res, next);
}, (req, res) => {
  createCustomer(req, res);
});

customerRouter.delete('/customers', (req, res, next) => {
  verifyToken(req, res, next);
}, (req, res) => {
  deleteCustomer(req,res);
});

module.exports = customerRouter;