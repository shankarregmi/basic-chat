const initialState = {
  messages: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
    console.log(action.data);
      return {
        ...state,
        messages: [...state.messages, action.data]
      };

    default:
      return state;
  }
};
