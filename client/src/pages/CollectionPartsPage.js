import React, { useState, useCallback } from 'react';
import Header from '../components/Header/Header';
import CardBrick from '../components/CardBrick';
import NavTop from '../components/NavTop';
import useHttp from '../hooks/useHttp.hook';
import { Loading } from '../assets/icons/Loading';
import Title from '../components/Header/Title';
import MainArea from '../components/MainArea';
import { useQuery } from 'react-query';

const CollectionPartsPage = () => {
  const [active, setActive] = useState('My Parts');
  const { request } = useHttp();

  const getPartsCollection = useCallback(async () => {
    try {
      const data = await request('/api/collection/myparts/all', 'GET', null);
      return data;
    } catch (error) {
      console.error(error);
    }
  }, [request]);

  const { data, loading } = useQuery('partsCollection', getPartsCollection);

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
        {loading && <Loading />}
        {data &&
          data.map((part) => (
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
      </MainArea>
    </>
  );
};

export default CollectionPartsPage;
