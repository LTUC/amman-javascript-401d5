'use strict';

const mongoose = require('mongoose');

const historySchema = mongoose.Schema({
  url: { type: 'string', required: true },
  method: {
    type: 'string',
    enum: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    uppercase: true,
  },
  body: { type: 'string' },
  headers: { type: 'string' },
});

module.exports = mongoose.model('history', historySchema);
