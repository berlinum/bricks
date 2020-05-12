import React, { useState, useCallback, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import NavTop from '../components/NavTop';
import useHttp from '../hooks/useHttp.hook';
import Header from '../components/Header/Header';
import Title from '../components/Header/Title';
import MainArea from '../components/MainArea';
import FloatingButton from '../components/FloatingButton';
import CardItem from '../components/CardItem';
import { useQuery } from 'react-query';

const Detail = styled(NavLink)`
  text-decoration: none;
`;

const CollectionSetsPage = () => {
  const [active, setActive] = useState('My Sets');
  const [add, setAdd] = useState(false);
  const { request, error, clearError } = useHttp();

  useEffect(() => {
    error && console.error(error);
    clearError();
  }, [error, clearError]);

  const getSetsCollection = useCallback(async () => {
    try {
      const data = await request('/api/collection/mysets/all', 'GET', null);
      return data;
    } catch (e) {
      //empty
    }
  }, [request]);

  const { data } = useQuery('setsCollection', getSetsCollection);

  return (
    <>
      <Header>
        <Title>Collection</Title>
      </Header>
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
      <MainArea>
        <NavLink to="/search">
          <FloatingButton
            value={add}
            onButtonClick={() => {
              setAdd(!add);
            }}
          />
        </NavLink>
        {data &&
          data.map((set) => (
            <Detail key={set._id} to={`/collection/mysets/${set._id}`}>
              <CardItem
                details={{
                  id: set._id,
                  title: set.name,
                  item: set.set_num,
                  year: set.year,
                  pieces: set.num_parts,
                  img: set.set_img_url,
                }}
              />
            </Detail>
          ))}
      </MainArea>
    </>
  );
};

export default CollectionSetsPage;
