import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        (isAuth) ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          )
      )}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.any,
  location: PropTypes.object,
  isAuth: PropTypes.bool.isRequired,
};

export default PrivateRoute;
