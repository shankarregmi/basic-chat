const _ = require('lodash');

const activeUsers = []; // {socketId: 'FsiufYqOyvGHaYpwAAAA', username: 'johndoe' }
const clients = []; // all connected sockets
module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('new socket connection', socket.id);
    afterLoginSuccess(socket);

    socket.on('disconnect', (socket) => {
      console.log('socket disconnected', socket.id);
      io.clients((err, clients) => {
        console.log(clients);
      })
    });

  });
};

function afterLoginSuccess(socket){
  socket.on('LOGIN_SUCCESS', function(username, callback) {
    console.log('username', username);
    callback(new Error('error'));
  });
}
