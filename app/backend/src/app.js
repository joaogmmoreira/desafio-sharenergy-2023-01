const userRouter = require('./routes/UserRouter');
const express = require('express');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use(express.json());

app.use(userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})