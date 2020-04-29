import React, { useState, useCallback, useEffect } from 'react';
import Header from '../components/Header';
import styled from '@emotion/styled';
import CardBrick from '../components/CardBrick';
import NavTop from '../components/NavTop';
import { useHttp } from '../hooks/useHttp.hook';

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
  const [partsCollection, setPartsCollection] = useState([]);
  const { request } = useHttp();

  const getPartsCollection = useCallback(async () => {
    try {
      const data = await request('/api/collection/myparts/all', 'GET', null);
      setPartsCollection(data);
    } catch (error) {
      console.error(error);
    }
  }, [request]);

  useEffect(() => {
    getPartsCollection();
  }, [getPartsCollection]);

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
        {partsCollection.map((part) => (
          <CardBrick
            key={part.partIds[0].id}
            details={{
              id: part.partIds[0].id,
              title: part.partIds[0].name,
              element: part.partIds[0].part_num,
              color: part.partIds[0].color,
              img: part.partIds[0].part_img_url,
              counter: part.total,
            }}
          />
        ))}
      </MainContainer>
    </>
  );
};

export default CollectionPartsPage;
