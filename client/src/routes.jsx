import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import PrivateRoute from './containers/Main/PrivateRoute';
import Chats from './containers/Chats';
import Login from './containers/Login';
import store from './store';

import { isLoggedIn } from './utils/auth';
import { loginSuccess } from './actions/authActions';
if (isLoggedIn()) {
  const user = JSON.parse(window.localStorage.getItem('User'));
  store.dispatch(loginSuccess(user));
}


const Routes = () => {
  return (
    <div className="container-fluid chat-window">
        {isLoggedIn() && <PrivateRoute isLoggedIn={isLoggedIn()} component={Chats} />}
        <Switch>
            <Route
              path="/login"
              component={Login}
            />
            {!isLoggedIn() && <Redirect from="*" to="/login" />}
        </Switch>
    </div>  
  );
};

export default withRouter(Routes);
