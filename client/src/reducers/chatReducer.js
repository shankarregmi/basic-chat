const initialState = {
  messages: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_PREVIOUS_MESSAGES':
      return {
        ...state,
        messages: action.messages
      };
    case 'SEND_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.data]
      };

    default:
      return state;
  }
};
