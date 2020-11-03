const io = require('socket.io')(4000); //1

//load the namespaces that we created to the server
require('./apps/slick')(io);

io.on('connection', (socket) => {
  console.log('Welcome to the Global connection', socket.id);
  socket.on('error', (payload) => {
    console.log('error', payload);
  });

  socket.on('action', (payload) => {
    //6
    io.emit('action', payload); //7
  });
});
