import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import { AuthContext } from '../context/AuthContext';
import Header from '../components/Header';
import styled from '@emotion/styled';
import CardItem from '../components/CardItem';
import Img from '../assets/img/Bus.jpg';

const MainContainer = styled.main`
  display: flex;
  flex-flow: row wrap;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  overflow: scroll;
`;

const CollectionPage = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push('/');
  };
  return (
    <>
      <Header title="Collection" />
      <MainContainer>
        <CardItem
          details={{
            id: 123,
            title: 'London Bus',
            pieces: 1686,
            item: 10258,
            year: 2017,
            img: Img,
          }}
        />
        <CardItem
          details={{
            id: 123,
            title: 'London Bus',
            pieces: 1686,
            item: 10258,
            year: 2017,
            img: Img,
          }}
        />
        <CardItem
          details={{
            id: 123,
            title: 'London Bus',
            pieces: 1686,
            item: 10258,
            year: 2017,
            img: Img,
          }}
        />
        <CardItem
          details={{
            id: 123,
            title: 'London Bus',
            pieces: 1686,
            item: 10258,
            year: 2017,
            img: Img,
          }}
        />
        <Button onClick={logoutHandler}>Log Out</Button>
      </MainContainer>
    </>
  );
};

export default CollectionPage;
