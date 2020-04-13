import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import CollectionPage from './pages/CollectionPage';
import LoginPage from './pages/LoginPage';

const useRoutes = (isAuthenticated) => {
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

export default useRoutes;
