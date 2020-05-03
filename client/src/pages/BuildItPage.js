import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header/Header';
import Title from '../components/Header/Title';

const MainContainer = styled.main`
  display: flex;
  flex-flow: row wrap;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  overflow: scroll;
`;

const BuildItPage = () => {
  return (
    <>
      <Header>
        <Title>Build It!</Title>
      </Header>
      <MainContainer>
        <h1>Build It</h1>
      </MainContainer>
    </>
  );
};

export default BuildItPage;
