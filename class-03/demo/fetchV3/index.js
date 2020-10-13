#!/usr/bin/env node
'use strict';
const Input = require('./lib/input.js');
const HTTP = require('./lib/http.js');
const mongoose = require('mongoose');
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/fetch';

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
  })
  .catch((err) => {
    console.log('NOOOOOOOOOOOOOOOOOOOOOOOOOOO', err.message);
  });
const options = new Input();
const http = new HTTP();
options.valid() ? http.fetch(options).then(mongoose.disconnect) : help();

function help() {
  console.log(`
  api USAGE: api -m <method> -u <url> -b '<body>'

  -m - HTTP method (get/post/put/patch/delete)
  -u - URL (leading :port => localhost)
  -b - Body to send in post/put/patch
       enclosed in single quotes & JSON must be valid
  `);
  // process.exit();
}
