'use strict';
require('@code-fellows/supergoose');

const Food = require('../models/food-collection.js');
const food = new Food();
describe('Food Model', () => {
  it('can create() a new food item', () => {
    const obj = { name: 'test food', calories: 999, type: 'fruit' };
    return food.create(obj).then((record) => {
      Object.keys(obj).forEach((key) => {
        expect(record[key]).toEqual(obj[key]);
      });
    });
  });
  it('can get() a food item', async () => {
    const obj = { name: 'test food 2', calories: 999, type: 'fruit' };
    const expected = { name: 'TEST FOOD 2', calories: 999, type: 'fruit' };
    const record = await food.create(obj);
    const foodItem = await food.get(record._id);
    Object.keys(expected).forEach((key) => {
      expect(foodItem[key]).toEqual(expected[key]);
    });
  });
});
