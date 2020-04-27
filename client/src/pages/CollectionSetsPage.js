import React, { useState, useCallback, useEffect } from 'react';
import Header from '../components/Header';
import styled from '@emotion/styled';
import CardItem from '../components/CardItem';
import NavTop from '../components/NavTop';
import FloatingButton from '../components/FloatingButton';
import { NavLink } from 'react-router-dom';
import { useHttp } from '../hooks/useHttp.hook';

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
  const [collection, setCollection] = useState([]);
  const { request } = useHttp();

  const getCollection = useCallback(async () => {
    try {
      const data = await request('/api/collection/mysets/all', 'GET', null);
      setCollection(data);
    } catch (error) {
      console.error(error);
    }
  }, [request]);

  useEffect(() => {
    getCollection();
  }, [getCollection]);

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
            value={add}
            onButtonClick={() => {
              setAdd(!add);
            }}
          />
        </NavLink>
        {collection.map((set) => (
          <CardItem
            key={set.set_num}
            details={{
              id: set.set_num,
              title: set.name,
              item: set.set_num,
              year: set.year,
              pieces: set.num_parts,
              img: set.set_img_url,
            }}
          />
        ))}
      </MainContainer>
    </>
  );
};

export default CollectionSetsPage;
