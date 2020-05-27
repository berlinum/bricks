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
  font-family: SF Pro Display Thin;
  font-size: 2rem;
  opacity: 0.4;
`;

const BuildItPage = () => {
  return (
    <>
      <Header>
        <Title>Build It!</Title>
      </Header>
      <MainArea>
        <Container>
          <Under />
          <span>Under construction</span>
        </Container>
      </MainArea>
    </>
  );
};

export default BuildItPage;
