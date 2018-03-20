import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import PrivateRoute from './containers/Main/PrivateRoute';
import Chats from './containers/Chats';
import Login from './containers/Login';


import { isLoggedIn } from './utils/auth';


const Routes = () => {
  return (
    <div>
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