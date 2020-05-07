import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header/Header';
import Title from '../components/Header/Title';
import MainArea from '../components/MainArea';
import Under from '../assets/icons/Under';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  font-family: SF Pro Rounded Regular;
  opacity: 0.4;
`;

const WishlistPage = () => {
  return (
    <>
      <Header>
        <Title>Wishlist</Title>
      </Header>
      <MainArea>
        <Container>
          <Under />
          <h1>Under construction</h1>
        </Container>
      </MainArea>
    </>
  );
};

export default WishlistPage;
