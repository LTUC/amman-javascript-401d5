'use strict';
const superagent = require('superagent');
const History = require('./models/history.js');
class HTTP {
  constructor() {}
  fetch(opts) {
    if (opts) {
      return superagent(opts.method, opts.url)
        .send(opts.body)
        .then(this.render)
        .then(() => this.save(opts));
    }
  }
  render(result) {
    // console.log(result);
  }

  async save(opts) {
    const record = new History(opts);
    const saved = await record.save();
    return saved;
  }
}

module.exports = HTTP;
