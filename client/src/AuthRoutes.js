import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import CollectionPage from './pages/CollectionPage';
import LoginPage from './pages/LoginPage';
import PropTypes from 'prop-types';

const AuthRoutes = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/collection" exact>
          <CollectionPage />
        </Route>
        <Redirect to="/collection" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" exact>
        <LoginPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

AuthRoutes.propTypes = {
  isAuthenticated: PropTypes.bool,
};

export default AuthRoutes;
