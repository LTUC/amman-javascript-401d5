'use strict';
const mongoose = require('mongoose');

const food = mongoose.Schema({
  name: { type: 'string', required: true },
  calories: { type: 'number', required: true },
  type: { type: 'string', enum: ['fruit', 'vegetable', 'protein'] },
});

// lifecycle hooks
food.post('init', function (doc) {
  console.log('hi from init');
});
food.post('findOne', function (doc) {
  console.log('After Find', doc);
  doc.name = doc.name.toUpperCase();
});

food.pre('save', function () {
  this.type = this.type.toLowerCase();
});
module.exports = mongoose.model('food', food);
