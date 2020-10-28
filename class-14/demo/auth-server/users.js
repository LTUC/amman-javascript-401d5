'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET || 'mysecret';
const db = {};
const users = {};
const roles = {
  user: ['read'],
  editor: ['read', 'create', 'update'],
  admin: ['read', 'create', 'update', 'delete'],
};
/*
database example
{
    mahmoud: {
      username:"mahmoud",
      password:"asdsadsadlkasdlhsakdh"
    }
}
*/

/*
users 

{
  save:{},
  authenticateBasic:{},
  generateToken:{},
  list:{}
}

*/
users.save = async function (record) {
  if (!db[record.username]) {
    record.password = await bcrypt.hash(record.password, 5);
    db[record.username] = record;
    return record;
  }
  return Promise.reject();
};

users.authenticateBasic = async function (user, password) {
  const valid = await bcrypt.compare(password, db[user].password);
  return valid ? db[user] : Promise.reject();
};

users.generateToken = function (user) {
  const token = jwt.sign(
    { username: user.username, capabilities: roles[user.role] },
    SECRET
  );
  return token;
};

users.authenticateToken = async function (token) {
  try {
    const tokenObject = jwt.verify(token, SECRET);
    console.log('TOKEN OBJECT', tokenObject);
    if (db[tokenObject.username]) {
      return Promise.resolve(tokenObject);
    } else {
      return Promise.reject();
    }
  } catch (e) {
    return Promise.reject(e.message);
  }
};
users.list = () => db;

module.exports = users;
