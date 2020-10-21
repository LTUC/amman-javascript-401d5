const mongoose = require('mongoose');

const food = mongoose.Schema({
  calories: { type: Number, require: true },
  name: { type: String, required: true },
  type: {
    type: String,
    uppercase: true,
    enum: ['FRUIT', 'VEGETABLE', 'PROTEIN'],
  },
});

module.exports = mongoose.model('food', food);
