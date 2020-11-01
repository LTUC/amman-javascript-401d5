const events = require('./events.js');
require('./logger.js');
require('./dashboard.js');

events.emit('join', { id: 5, username: 'ahmad' });

events.emit('leave', { id: 5, username: 'ahmad' });
