import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import chats from './chatReducer';
import auth from './authReducer';

export default combineReducers({
  router: routerReducer,
  chats,
  auth
});
