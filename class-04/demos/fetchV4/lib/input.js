'use strict';
const isUrl = require('is-url');
const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.method = this.validateMethod(args.m);
    this.url = this.isURL(args.u);
    this.body = this.getBody(args.b);
    this.headers = this.getHeaders(args.h);
  }
  validateMethod(method = '') {
    //i is for case-insensitive
    const validMethods = /get|put|patch|post|delete/i;
    return validMethods.test(method) ? method : 'GET';
  }

  isURL(url = '') {
    // url = ':3000'
    url = url.startsWith(':') ? `http://localhost${url}` : url;
    return isUrl(url) ? url : undefined;
  }

  getBody(body = '') {
    try {
      return JSON.parse(body);
    } catch (e) {
      return body;
    }
  }

  getHeaders(headers = '') {
    return headers;
  }

  valid() {
    console.log(this.url, this.method);
    return this.url && this.method;
  }
}

module.exports = Input;
