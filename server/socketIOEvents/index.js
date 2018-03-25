const db = require('../models');

const activeUsers = []; // {socketId: 'FsiufYqOyvGHaYpwAAAA', username: 'johndoe' }
const clients = []; // all connected sockets
module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('new socket connection', socket.id);
    
  
    socket.on('LOAD_MY_CHANNELS', (userId, callback) => {
      db.Channels.find({participants: userId}).then((channels) => {
        callback(channels);
      });
    });

    socket.on('SET_ACTIVE_CHANNEL', (channel, callback) => {
      socket.join(channel.name);
      db.Messages.find({channel: channel._id}).then((messages) => {
      callback(messages);
      })
    });

    socket.on('SEND_MESSAGE', (data, callback) => {
      db.Messages.create(data).then((msg) => {
        db.Messages.populate(msg, {path: 'channel'}, function(err, _msg) {
          const response = {
            body: _msg.body,
            author: _msg.author,
            channel: _msg.channel._id
          }
          socket.to(_msg.channel.name).emit('RECEIVE_MESSAGE', data);
          callback(true);
        })
      })
    });


  });
};

