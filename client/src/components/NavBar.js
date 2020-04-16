import React from 'react';
import styled from '@emotion/styled';
import colors from '../utils/colors';
import Home from '../assets/icons/home.svg';
import Rocket from '../assets/icons/rocket.svg';
import Wishlist from '../assets/icons/heart.svg';
import Profile from '../assets/icons/profile.svg';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 83px;
  min-width: 375px;
  justify-content: space-around;
  align-items: center;
  background: ${colors.bgLight};
`;

const NavItem = styled.button`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border: transparent;
  color: ${colors.textActiv};
  background: transparent;
  &:focus {
  }
`;

const NavBar = () => (
  <Container>
    <NavItem>
      <img src={Home} />
      <label>Collection</label>
    </NavItem>
    <NavItem>
      <img src={Rocket} />
      <label>Build It!</label>
    </NavItem>
    <NavItem>
      <img src={Wishlist} />
      <label>Wishlist</label>
    </NavItem>
    <NavItem>
      <img src={Profile} />
      <label>Profile</label>
    </NavItem>
  </Container>
);

export default NavBar;
