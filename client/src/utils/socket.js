import io from 'socket.io-client';

let socket;

export const connect = () => {
  try {
    socket = io.connect('http://localhost:9000');

    return socket;
  } catch (ioNotBoundErr) {
    throw new Error('Unable to connect to socket server');
  }
};
