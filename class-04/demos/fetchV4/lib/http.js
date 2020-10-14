'use strict';
const superagent = require('superagent');
const history = require('./models/history-collection.js');
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
    // const record = new History(opts);
    console.log('hiiiiii', opts);
    const saved = await history.create(opts);
    return saved;
  }
}

module.exports = HTTP;
