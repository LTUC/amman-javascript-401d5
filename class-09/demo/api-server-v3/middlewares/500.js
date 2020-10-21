'use strict';

module.exports = (error, req, res, next) => {
  res.status(500);
  res.statusMessage = 'Server Error';
  res.send({ error: error.message });
};
