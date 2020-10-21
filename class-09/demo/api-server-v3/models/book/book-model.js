'use strict';

const booksModel = require('./book.js');
const Collection = require('../collection.js');

class Book extends Collection {
  constructor() {
    super(booksModel);
  }
}

module.exports = new Book();
