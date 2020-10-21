'use strict';

const foodModel = require('./food.js');
const Collection = require('../collection.js');

class Food extends Collection {
  constructor() {
    super(foodModel);
  }
}

module.exports = new Food();
