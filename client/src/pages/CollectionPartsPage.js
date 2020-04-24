import React, { useState } from 'react';
import Header from '../components/Header';
import styled from '@emotion/styled';
import CardBrick from '../components/CardBrick';
import Img from '../assets/img/Brick.jpeg';
import NavTop from '../components/NavTop';

const MainContainer = styled.main`
  display: flex;
  flex-flow: row wrap;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  overflow: scroll;
`;

const CollectionPartsPage = () => {
  const [active, setActive] = useState('My Parts');
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
        <CardBrick
          details={{
            id: 123,
            title: 'Brick 2X2',
            element: 300323,
            color: 'Bright Blue',
            counter: 100,
            img: Img,
          }}
        />
        <CardBrick
          details={{
            id: 123,
            title: 'Brick 2X2',
            element: 300323,
            color: 'Bright Blue',
            counter: 100,
            img: Img,
          }}
        />
        <CardBrick
          details={{
            id: 123,
            title: 'Brick 2X2',
            element: 300323,
            color: 'Bright Blue',
            counter: 100,
            img: Img,
          }}
        />
        <CardBrick
          details={{
            id: 123,
            title: 'Brick 2X2',
            element: 300323,
            color: 'Bright Blue',
            counter: 100,
            img: Img,
          }}
        />
        <CardBrick
          details={{
            id: 123,
            title: 'Brick 2X2',
            element: 300323,
            color: 'Bright Blue',
            counter: 100,
            img: Img,
          }}
        />
      </MainContainer>
    </>
  );
};

export default CollectionPartsPage;
