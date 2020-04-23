import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import CollectionPage from './pages/CollectionPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BuildItPage from './pages/BuildItPage';
import WishlistPage from './pages/WishlistPage';
import ProfilePage from './pages/ProfilePage';
import PropTypes from 'prop-types';
import NavButtom from './components/NavBottom';
import { Heart, Home, Rocket, Profile } from './assets/icons/Icons';
import styled from '@emotion/styled';
import colors from './utils/colors';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.bgLight};
`;

const NavigationBottom = () => {
  const [active, setActive] = useState('Collection');

  return (
    <NavButtom
      links={[
        { label: 'Collection', Icon: Home, navLink: '/collection' },
        {
          label: 'Build It!',
          Icon: Rocket,
          navLink: '/buildit',
        },
        {
          label: 'Wishlist',
          Icon: Heart,
          navLink: '/wishlist',
        },
        {
          label: 'Profile',
          Icon: Profile,
          navLink: '/profile',
        },
      ]}
      value={active}
      onTabClick={(page) => setActive(page)}
    />
  );
};

export const AuthRoutes = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return (
      <Container>
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
        <NavigationBottom />
      </Container>
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

AuthRoutes.propTypes = {
  isAuthenticated: PropTypes.bool,
};
