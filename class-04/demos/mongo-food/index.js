'use strict';
require('dotenv').config();
const mongoose = require('mongoose');
const Food = require('./models/food-collection.js');
const food = new Food();
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/food';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const foodOperations = async () => {
  const carrot = {
    calories: 330,
    type: 'vegetable',
    name: 'Carrots',
  };

  const foodItem = await food.create(carrot);
  // await food.save();
  console.log('food Added', foodItem);

  const oneFood = await food.get(food.id);
  console.log('One Food', oneFood);
  const allFood = await food.get();
  console.log('All Food', allFood);
  mongoose.disconnect();
};

foodOperations();
