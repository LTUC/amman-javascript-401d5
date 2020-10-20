'use strict';

const express = require('express');
const router = express.Router();
const foodModel = require('../models/food/food-model.js');

router.get('/', getFoodHandler);
router.get('/:id', getOneFoodHandler);
router.post('/', createFoodHandler);

function getFoodHandler(req, res, next) {
  foodModel
    .get()
    .then((data) => {
      res.json(data);
    })
    .catch(next);
}
function getOneFoodHandler(req, res, next) {
  foodModel
    .get(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch(next);
}

function createFoodHandler(req, res, next) {
  foodModel
    .create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch(next);
}
module.exports = router;
