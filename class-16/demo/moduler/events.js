const EE = require('events');
// this will export one instance of the EE and will make all events work across files
module.exports = new EE();
