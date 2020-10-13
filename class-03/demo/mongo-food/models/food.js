'use strict';
const mongoose = require('mongoose');

const food = mongoose.Schema({
  name: { type: 'string', required: true },
  calories: { type: 'number', required: true },
  type: { type: 'string', enum: ['fruit', 'vegetable', 'protein'] },
});

module.exports = mongoose.model('food', food);
