module.exports = (io) => {
  const slick = io.of('/slick'); // to create a namespace
  slick.on('connection', (socket) => {
    // this will be called when a client connect  to the /slick
    console.log('Welcome to the slick chat Server!', socket.id);
    let currentRoom = '';

    socket.on('join', (room) => {
      //5
      // this will run when a client emit a join event
      socket.leave(currentRoom); // this will leave a room
      socket.join(room); // this will join a specific room
      currentRoom = room;
      console.log('Joined a new Room', room);
      slick.to(`${socket.id}`).emit('joined', room); // only the sender will recieve this message 6
    });

    socket.on('message', (payload) => {
      // this will broadcast to all users in the current room ONLY
      slick.to(currentRoom).emit('message', payload);
    });
  });
};
