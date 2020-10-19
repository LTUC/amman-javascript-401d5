'use strict';
const express = require('express');
const app = express();
const loggerMiddleware = require('./logger.js');
// global middleware ALWAYS ABOVE THE ROUTES
// YOU NEED THIS LINE FOR POST| PUT|PATCH
// parse the body data to json
app.use(express.json());
app.use(loggerMiddleware);

// basic routes
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/fruit', (req, res) => {
  // getting the query value from a get request
  //  :3000/fruit/?type=apple
  res.status(200).json({
    type: req.query.type,
  });
});

app.get('/fruit/:type', (req, res) => {
  res.status(200).json({
    type: req.params.type,
  });
});
app.post('/fruit/', (req, res) => {
  console.log('This is the body: ', req.body);
  res.status(201).json({
    type: req.body.type,
  });
});
app.put('/fruit/:id', square(), (req, res) => {
  console.log('This is the body: ', req.body, req.number);
  res.status(202).json(req.body);
});

// Middleware
function square() {
  return (req, res, next) => {
    let num;
    if (!req.params.num) {
      num = 10;
      // res.send('NO number');
    } else {
      num = req.params.num;
    }
    next();
    req.number = num * num;
  };
}
//route specific middleware
app.get('/middleware/:num', square(), (req, res) => {
  res.json({ number: req.number });
});
// app.get(
//   '/middleware2',
//   (req, res, next) => {
//     next();
//   },
//   (req, res) => {
//     res.json({ number: req.number });
//   }
// );

app.get('/bad', (req, res) => {
  throw new Error('a test error');
});

// api/v1

let db = []; //in-memory db

app.post('/api/v1/people', (req, res) => {
  const { name } = req.body;
  const record = { name };
  record.id = db.length + 1;
  db.push(record);
  res.status(201).json(record);
});

app.get('/api/v1/people', (req, res) => {
  const count = db.length;
  const results = db;
  res.json({ count, results });
});
app.get('/api/v1/people/:id', (req, res) => {
  const id = req.params.id;
  console.log(id, db);

  const records = db.filter((record) => record.id === parseInt(id));

  console.log(records);
  res.json(records[0]);
});

// This always should be after all the routes in the end of the file
function errorHandler(err, req, res, next) {
  res.status(500);
  res.statusMessage = 'Server Error :(';
  res.json({ error: err.message });
}

function notFoundHandler(req, res, next) {
  res.status(404);
  res.statusMessage = 'Resource not found';
  res.json({ error: 'Page Not Found' });
}
app.use('*', notFoundHandler);
app.use(errorHandler);
module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      const PORT = port || process.env.PORT || 5000;
      console.log(`up and running on port ${PORT}`);
    });
  },
};
