import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import chats from './chatReducer';
import auth from './authReducer';
import channels from './channelReducer';

export default combineReducers({
  router: routerReducer,
  chats,
  auth,
  channels
});
