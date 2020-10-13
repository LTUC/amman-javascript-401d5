'use strict';
require('dotenv').config();
const mongoose = require('mongoose');
const Food = require('./models/food.js');

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

  const food = new Food(carrot);
  await food.save();
  console.log('food Added', food);

  const oneFood = await Food.findById(food.id);
  console.log('One Food', oneFood);
  const allFood = await Food.find({});
  console.log('All Food', allFood);
  mongoose.disconnect();
};

foodOperations();
