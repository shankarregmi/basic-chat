const initialState = {
    myChannels: [],
    activeChannel: {} // that is being open on chat window
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'LOAD_CHANNEL_SUCCESS':
        return {
          ...state,
          myChannels: action.channels,
          activeChannel: action.channels[0] // by default set first channel to active
        };
      
        case 'SET_ACTIVE_CHANNEL':
        return {
          ...state,
          activeChannel: action.channel
        };
  
      default:
        return state;
    }
  };
  