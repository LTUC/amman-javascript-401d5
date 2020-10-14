'use strict';

const foodModel = require('./food.js');

class Food {
  constructor() {}
  get(_id) {
    if (_id) {
      return foodModel.findOne({ _id });
    } else {
      return foodModel.find({});
    }
  }
  create(record) {
    const newRecord = new foodModel(record);
    return newRecord.save();
  }
  update(_id, record) {
    // {new:true} will return the new updated record without it it will return the old record
    return foodModel.findByIdAndUpdate(_id, record, { new: true });
  }
  delete(_id) {
    return foodModel.findByIdAndDelete(_id);
  }
}

module.exports = Food;
