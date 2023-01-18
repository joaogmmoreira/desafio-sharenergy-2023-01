const express = require('express');
const cors = require('cors');
const app = express();
const userRouter = require('./routers/user.router');
const customerRouter = require('./routers/customer.router');

app.use(express.json());
app.use(cors());

app.use(userRouter);
app.use(customerRouter);

module.exports = app;
