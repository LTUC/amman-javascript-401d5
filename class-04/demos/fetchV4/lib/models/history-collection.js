'use strict';

const model = require('./history.js');

class Collection {
  constructor() {}
  get(_id) {
    if (_id) {
      return model.findOne({ _id });
    } else {
      return model.find({});
    }
  }
  create(record) {
    const newRecord = new model(record);
    return newRecord.save();
  }
  update(_id, record) {
    // {new:true} will return the new updated record without it it will return the old record
    return model.findByIdAndUpdate(_id, record, { new: true });
  }
  delete(_id) {
    return model.findByIdAndDelete(_id);
  }
}

module.exports = new Collection();
