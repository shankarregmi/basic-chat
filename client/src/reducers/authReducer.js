const initialState = {
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.user
      };

    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        user: null
      };

    default:
      return state;
  }
};