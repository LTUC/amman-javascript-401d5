'use strict';
const minimist = require('minimist');
const Input = require('../lib/input.js');
jest.mock('minimist');
minimist.mockImplementation(()=>{
  return {
    u: ':8000',
    m: 'post',
    b: 'testBody',
    h: {},
  };
});
describe('Input',()=>{
  describe('validateMethod',() => {
    it('defaults to GET when no method is specified',() => {
      const options = new Input();
      expect (options.validateMethod()).toEqual('GET');
    });
    it('defaults to GET when wrong method is specified',() => {
      const options = new Input();
      expect (options.validateMethod('bar')).toEqual('GET');
    });
    it('returns REST method when proper method is specified',() => {
      const options = new Input();
      const methods = ['get','post','put','patch','delete'];
      methods.forEach((method)=>{
        expect (options.validateMethod(method)).toEqual(method);
      });
      // expect (options.validateMethod('get')).toEqual('get');
      // expect (options.validateMethod('post')).toEqual('post');
      // expect (options.validateMethod('put')).toEqual('put');
      // expect (options.validateMethod('patch')).toEqual('patch');
      // expect (options.validateMethod('delete')).toEqual('delete');
    });
  });
  describe('isURL',()=>{
    it('returns undefined if not specified',()=>{
      const options = new Input();
      expect(options.isURL()).toBeUndefined();
    });
    it('returns undefined if url is invalid',()=>{
      const options = new Input();
      expect(options.isURL('foo')).toBeUndefined();
    });
    it('returns localhost if :port is specified',()=>{
      const options = new Input();
      expect(options.isURL(':3000')).toEqual('http://localhost:3000');
    });
    it('returns url when properly formatted URL is  specified',()=>{
      const options = new Input();
      const url = 'https://www.foo.com';
      expect(options.isURL(url)).toEqual(url);
    });
  });
  describe('getBody',()=>{
    it('returns undefined if not specified',()=>{
      const options = new Input();
      expect(options.getBody()).toBeUndefined();
    });
    it('returns JSON if a stringified object',()=>{
      const options = new Input();
      const obj = { name:'mahmoud' };
      const str = JSON.stringify(obj);
      expect(options.getBody(str)).toEqual(obj);
    });
    it('returns a string if none-object is specified',()=>{
      const options = new Input();
      const str = 'This is not an object!';
      expect(options.getBody(str)).toEqual(str);
    });
  });
  describe('validate',() =>{
    it('return true when proper object is given',()=>{
      const options = new Input();
      expect(options.valid()).toBeTruthy();
    });
    it('return false when proper object is given',()=>{
      const options = new Input();
      options.url = undefined;
      expect(options.valid()).toBeFalsy();
    });
  });
});