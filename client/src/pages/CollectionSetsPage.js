import React, { useState } from 'react';
import Header from '../components/Header';
import styled from '@emotion/styled';
import CardItem from '../components/CardItem';
import Img from '../assets/img/Bus.jpg';
import NavTop from '../components/NavTop';
import FloatingButton from '../components/FloatingButton';
import { NavLink } from 'react-router-dom';

const MainContainer = styled.main`
  display: flex;
  flex-flow: row wrap;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  overflow: scroll;
`;

const CollectionSetsPage = () => {
  const [active, setActive] = useState('My Sets');
  const [add, setAdd] = useState(false);

  return (
    <>
      <Header title="Collection" />
      <NavTop
        links={[
          { label: 'My Sets', navLink: '/collection/mysets' },
          {
            label: 'My Parts',
            navLink: '/collection/myparts',
          },
        ]}
        value={active}
        onTabClick={(page) => setActive(page)}
      />
      <MainContainer>
        <NavLink to="/search">
          <FloatingButton
            to="/search"
            value={add}
            onButtonClick={() => {
              setAdd(!add);
            }}
          />
        </NavLink>
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

export default CollectionSetsPage;
