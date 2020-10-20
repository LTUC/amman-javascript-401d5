'use strict';
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const foodRouter = require('../routes/food.js');
const userRouter = require('../routes/user.js');
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use((req, res, next) => {
  console.log('hi');
  next();
});
app.use('/api/v1/food', foodRouter);
app.use('api/v1/user', userRouter);
module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || 3000;
    app.listen(PORT, () => {
      console.log(`the server is up and running on ${PORT}`);
    });
  },
};
