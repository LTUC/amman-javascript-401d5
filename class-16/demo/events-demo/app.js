const EE = require('events');
const events = new EE();

// register some events

events.on('join', (payload) => handleJoin(payload));

events.on('welcome', (payload) => log('welcome', payload));
events.on('leave', (payload) => log('leave', payload));

function handleJoin(payload) {
  console.log(`${payload.username} has joined!`);
  events.emit('welcome', { username: payload.username });
}
function log(event, payload) {
  console.log({ event, time: new Date(), payload });
}

// emit some events

events.emit('join', { id: 1, username: 'mahmoud' });

events.emit('leave', { id: 1, username: 'mahmoud' });
