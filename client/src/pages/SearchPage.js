import React from 'react';
import Header from '../components/Header';
import styled from '@emotion/styled';
import colors from '../utils/colors';

const MainContainer = styled.main`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  align-items: center;
  overflow: scroll;
`;

const Input = styled.input`
  width: 250px;
  font-size: 30px;
  margin: 20px;
  background-color: ${colors.textActive};
`;

const SearchPage = () => {
  return (
    <>
      <Header title="Search" />
      <MainContainer>
        <Input type="text" />
      </MainContainer>
    </>
  );
};

export default SearchPage;
