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
  const [setsCollection, setSetsCollection] = useState([]);
  const { request } = useHttp();

  const getSetsCollection = useCallback(async () => {
    try {
      const data = await request('/api/collection/mysets/all', 'GET', null);
      setSetsCollection(data);
    } catch (error) {
      console.error(error);
    }
  }, [request]);

  useEffect(() => {
    getSetsCollection();
  }, [getSetsCollection]);

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
        {setsCollection.map((set) => (
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
