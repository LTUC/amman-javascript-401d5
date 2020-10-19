'use strict';
//Middleware always have access to req,res and next
module.exports = (req, res, next) => {
  console.log('__Request__', req.method, req.path);
  // very important to call the next method in the end of the middleware to go to the next function
  next();
};
