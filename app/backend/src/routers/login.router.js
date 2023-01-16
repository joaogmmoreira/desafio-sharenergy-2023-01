const express = require('express');
const { validateLogin } = require('../controllers/login.controller');

const loginRouter = express.Router();

loginRouter.post('/', validateLogin);

module.exports = loginRouter;