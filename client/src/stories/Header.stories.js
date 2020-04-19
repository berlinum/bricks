import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import HeaderWithActions from '../components/HeaderWithActions';

export default {
  title: 'Header',
  component: Header,
};

const Container = styled.div`
  width: 475px;
`;

export const HeaderDefault = () => (
  <Container>
    <Header />
  </Container>
);

export const HeaderWithActionButtons = () => (
  <Container>
    <HeaderWithActions />
  </Container>
);
