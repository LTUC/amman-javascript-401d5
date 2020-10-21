const mongoose = require('mongoose');

const book = mongoose.Schema({
  title: { type: String, require: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('book', book);
