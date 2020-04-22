import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import CollectionPage from './pages/CollectionPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BuildItPage from './pages/BuildItPage';
import WishlistPage from './pages/WishlistPage';
import ProfilePage from './pages/ProfilePage';
import PropTypes from 'prop-types';

export const authRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/collection" exact>
          <CollectionPage />
        </Route>
        <Route path="/buildit">
          <BuildItPage />
        </Route>
        <Route path="/wishlist">
          <WishlistPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
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
      <Route path="/register">
        <RegisterPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

authRoutes.propTypes = {
  isAuthenticated: PropTypes.bool,
};
