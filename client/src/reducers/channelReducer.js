const initialState = {
    myChannels: []
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'LOAD_CHANNEL_SUCCESS':
        return {
          ...state,
          myChannels: action.channels
        };
  
      default:
        return state;
    }
  };
  