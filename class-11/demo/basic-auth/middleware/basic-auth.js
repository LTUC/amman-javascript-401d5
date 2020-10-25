const base64 = require('base-64');
const users = require('../users.js');
module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    next('Invalid Login');
  } else {
    // headers = {authorization: 'basic klajdaksd'}
    console.log('__Headers__', req.headers);
    const basicAuth = req.headers.authorization.split(' ').pop(); // klajdaksd
    const [user, pass] = base64.decode(basicAuth).split(':'); // => mahmoud:1234 => ['mahmoud','1234]
    console.log('__BasicAuth__', user, pass);
    users
      .authenticateBasic(user, pass)
      .then((validUser) => {
        console.log('__ValidUser__', validUser);
        req.token = users.generateToken(validUser);
        next();
      })
      .catch((err) => next('Invalid Login'));
  }
};
