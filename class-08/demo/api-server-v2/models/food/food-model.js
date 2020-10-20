'use strict';

const foodModel = require('./food.js');
const Collection = require('../collection.js');

class Food extends Collection {
  constructor() {
    super(foodModel);
  }

  foo() {
    console.log('hi');
  }
}

module.exports = new Food();
