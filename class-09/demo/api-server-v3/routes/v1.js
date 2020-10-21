'use strict';

const express = require('express');
const router = express.Router();
const foodModel = require('../models/food/food-model.js');
const bookModel = require('../models/book/book-model.js');

// router.param ==> a middleware function that will be fired when req.params match the first argument
router.param('model', getModel);

router.get('/:model', getAllHandler);
router.get('/:model/:id', getOneHandler);
router.post('/:model', createHandler);

function getModel(req, res, next) {
  const model = req.params.model;
  console.log('__MODEL__', model);
  switch (model) {
    case 'food':
      req.model = foodModel;
      break;
    case 'books':
      req.model = bookModel;
      break;
    default:
      throw new Error('Invalid Model');
  }
  next();
}

function getAllHandler(req, res, next) {
  // req.model ==> food OR book
  req.model
    .get()
    .then((data) => {
      res.json(data);
    })
    .catch(next);
}
function getOneHandler(req, res, next) {
  req.model
    .get(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch(next);
}

function createHandler(req, res, next) {
  req.model
    .create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch(next);
}
module.exports = router;
