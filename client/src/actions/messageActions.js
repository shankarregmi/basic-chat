export const loadPreviousMessages = messages => {
  return {
    type: 'LOAD_PREVIOUS_MESSAGES',
    messages
  };
};

export const sendMessageSuccess = data => {
  return {
    type: 'SEND_MESSAGE',
    data
  };
};

export const sendMessage = (socket, data) => {
  return dispatch => {
      socket.emit('SEND_MESSAGE', data, (status) => {
          if (status) {
              dispatch(sendMessageSuccess(data));
          }
      });
  };
};

