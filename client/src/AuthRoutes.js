import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import colors from './utils/colors';
import NavButtom from './components/NavBottom';
import { Heart, Home, Rocket, Profile } from './assets/icons/Icons';
import CollectionSetsPage from './pages/CollectionSetsPage';
import CollectionPartsPage from './pages/CollectionPartsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BuildItPage from './pages/BuildItPage';
import WishlistPage from './pages/WishlistPage';
import ProfilePage from './pages/ProfilePage';
import SearchPage from './pages/SearchPage';
import ProfileEditPage from './pages/ProfileEditPage';
import DetailPage from './pages/DetailPage';

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
        { label: 'Collection', Icon: Home, navLink: '/collection/mysets' },
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
          <Route path="/collection/mysets" exact>
            <CollectionSetsPage />
          </Route>
          <Route path="/collection/mysets/:setId">
            <DetailPage />
          </Route>
          <Route path="/collection/myparts">
            <CollectionPartsPage />
          </Route>
          <Route path="/search">
            <SearchPage />
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
          <Route path="/edit">
            <ProfileEditPage />
          </Route>
          <Redirect to="/collection/mysets" />
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
