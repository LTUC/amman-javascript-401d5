const events = require('./events.js');

events.on('join', (payload) => {
  console.log(`${payload.username} has joined!`);
  events.emit('welcome', { username: payload.username });
  console.log('hello');
});

events.emit('welcome', {}); // this will not work
