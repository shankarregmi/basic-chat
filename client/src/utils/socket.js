import io from 'socket.io-client';

import store from '../store';
import { sendMessageSuccess } from '../actions/messageActions';
let socket;

export const connect = () => {
  try {
    socket = io.connect('http://localhost:9000/');

    return socket;
  } catch (ioNotBoundErr) {
    throw new Error('Unable to connect to socket server');
  }
};

export const disconnect = () => {
  socket.disconnect();
};

export const socketEvents = () => {
  socket.on('RECEIVE_MESSAGE', (data) => {
    store.dispatch(sendMessageSuccess(data));
  })
}