const events = require('./events.js');

events.on('join', (payload) => log('join', payload));
events.on('welcome', (payload) => log('welcome', payload));
events.on('leave', (payload) => log('leave', payload));
function log(event, payload) {
  console.log({ event, time: new Date(), payload });
}
