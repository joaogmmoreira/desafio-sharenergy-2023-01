const express = require('express');
// import UserController from '../controllers/UserController';

const userRouter = express.Router();
// const userController = new UserController();

userRouter.post('/', (_req, res) => {
  res.send('Olár')
});

module.exports = userRouter;