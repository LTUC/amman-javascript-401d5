'use strict';
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const apiRouter = require('../routes/v1.js');
const errorHandler = require('../middlewares/500.js');
const notFoundHandler = require('../middlewares/404.js');
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/api/v1', apiRouter);

app.use('*', notFoundHandler);
app.use(errorHandler);
module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || 3000;
    app.listen(PORT, () => {
      console.log(`the server is up and running on ${PORT}`);
    });
  },
};
