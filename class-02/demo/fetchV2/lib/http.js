'use strict';

class HTTP {
  constructor(){}
  fetch(opts) {
    if(opts) {
      const fakeResponseData = {
        count:2,
        results: [{name:'mahmoud'},{name:'Ahmad'}],
      };
      this.render(fakeResponseData);
    }
  }
  render(result) {
    console.log(result);
  }
}

module.exports = HTTP;