const express = require('express');
const app = express();
const port = 3000;
const loginRouter = require('./routers/login.router');

app.use(express.json());

app.use(loginRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})