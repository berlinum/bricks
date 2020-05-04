import React, { useState, useCallback, useEffect, useContext } from 'react';
import Header from '../components/Header/Header';
import CardBrick from '../components/CardBrick';
import NavTop from '../components/NavTop';
import useHttp from '../hooks/useHttp.hook';
import { Loading } from '../assets/icons/Loading';
import AuthContext from '../context/AuthContext';
import Title from '../components/Header/Title';
import MainArea from '../components/MainArea';

const CollectionPartsPage = () => {
  const auth = useContext(AuthContext);
  const [active, setActive] = useState('My Parts');
  const [partsCollection, setPartsCollection] = useState([]);
  const { request, loading } = useHttp();

  const getPartsCollection = useCallback(async () => {
    try {
      const data = await request('/api/collection/myparts/all', 'GET', null, {
        Authorization: `Bearer ${auth.token}`,
      });
      setPartsCollection(data);
    } catch (error) {
      console.error(error);
    }
  }, [request, auth.token]);

  useEffect(() => {
    getPartsCollection();
  }, [getPartsCollection]);

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
        {partsCollection &&
          partsCollection.map((part) => (
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
