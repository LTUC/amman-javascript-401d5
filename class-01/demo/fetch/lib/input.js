'use strict';
const isUrl = require('is-url');
const minimist = require('minimist');


function Input() {
  console.log('this is the row argv ',process.argv) // => ["node","index.js",...]
  const args = minimist(process.argv.slice(2)); // => {}
  console.log('this is the row argv after slice', process.argv.slice(2));
  console.log('this is the row argv after minimist', args);
  this.method = this.validateMethod(args.m);
  this.url = this.isURL(args.u);
}

Input.prototype.validateMethod = function (method = '') {
  //i is for case-insensitive
  const validMethods = /get|put|patch|post|delete/i
  return validMethods.test(method) ? method :'GET';
}

Input.prototype.isURL = function(url = '') {
  return isUrl(url) ? url : undefined;
}

module.exports = Input;