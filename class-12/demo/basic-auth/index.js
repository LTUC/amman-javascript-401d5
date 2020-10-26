'use strict';
const express = require('express');
const PORT = process.env.PORT || 3000;
const basicAuth = require('./middleware/basic-auth.js');
const oauth = require('./middleware/oauth.js');
const users = require('./users.js');
const app = express();
app.use(express.static('./public'));
app.use(express.json());
app.post('/signup', (req, res) => {
  users.save(req.body).then((user) => {
    const token = users.generateToken(user);
    res.json({ token });
  });
});

app.post('/signin', basicAuth, (req, res) => {
  //req.token is coming from the mw
  res.json({ token: req.token });
});

app.get('/oauth', oauth, (req, res) => {
  res.json({ token: req.token });
});
app.get('/users', basicAuth, (req, res) => {
  res.json(users.list());
});

app.listen(PORT, () => console.log('server is running'));
