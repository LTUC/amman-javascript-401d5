'use strict';

const HTTP = require('../lib/http.js');
jest.spyOn(global.console,'log');

describe('HTTP Module', ()=>{
  it('does nothing when fetch() with invalid options',()=>{
    const http = new HTTP();
    http.fetch();
    expect(console.log).not.toHaveBeenCalled();
  });
  it('log out options when fetch() with options',()=>{
    const http = new HTTP();
    http.fetch({m:'GET',u:'https://www.foo.com'});
    expect(console.log).toHaveBeenCalled();
  });
});