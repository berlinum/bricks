import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';

const MainContainer = styled.main`
  display: flex;
  flex-flow: row wrap;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  overflow: scroll;
`;

const WishlistPage = () => {
  return (
    <>
      <Header title="Wishlist" />
      <MainContainer>
        <h1>Wishlist</h1>
      </MainContainer>
    </>
  );
};

export default WishlistPage;
