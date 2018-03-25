const initialState = {
  me: null,
  users: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        me: action.response.me,
        users: action.response.users
      };

    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        me: null,
        users: null
      };

    default:
      return state;
  }
};