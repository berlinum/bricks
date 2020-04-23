import React, { useState } from 'react';
import Header from '../components/Header';
import styled from '@emotion/styled';
import CardItem from '../components/CardItem';
import Img from '../assets/img/Bus.jpg';
import NavTop from '../components/NavTop';

const MainContainer = styled.main`
  display: flex;
  flex-flow: row wrap;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  overflow: scroll;
`;

const CollectionPage = () => {
  const [active, setActive] = useState('My Sets');
  return (
    <>
      <Header title="Collection" />
      <NavTop
        links={[
          { label: 'My Sets' },
          {
            label: 'My Parts',
          },
        ]}
        value={active}
        onTabClick={(page) => setActive(page)}
      />
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
      </MainContainer>
    </>
  );
};

export default CollectionPage;
