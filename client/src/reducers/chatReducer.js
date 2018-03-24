const initialState = {
  messages: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.message]
      };

    default:
      return state;
  }
};
