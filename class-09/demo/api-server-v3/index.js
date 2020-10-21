'use strict';
// require('dotenv').config()
const mongoose = require('mongoose');
const server = require('./lib/server.js');
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/class-08';

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    server.start(process.env.PORT);
  })
  .catch((err) => console.error(err.message));
