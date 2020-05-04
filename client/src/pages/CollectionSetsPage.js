import React, { useState, useCallback, useEffect, useContext } from 'react';
import Header from '../components/Header/Header';
import CardItem from '../components/CardItem';
import NavTop from '../components/NavTop';
import FloatingButton from '../components/FloatingButton';
import { NavLink } from 'react-router-dom';
import useHttp from '../hooks/useHttp.hook';
import AuthContext from '../context/AuthContext';
import Title from '../components/Header/Title';
import MainArea from '../components/MainArea';

const CollectionSetsPage = () => {
  const auth = useContext(AuthContext);
  const [active, setActive] = useState('My Sets');
  const [add, setAdd] = useState(false);
  const [setsCollection, setSetsCollection] = useState([]);
  const { request } = useHttp();

  const getSetsCollection = useCallback(async () => {
    try {
      const data = await request('/api/collection/mysets/all', 'GET', null, {
        Authorization: `Bearer ${auth.token}`,
      });
      setSetsCollection(data);
    } catch (error) {
      console.error(error);
    }
  }, [request, auth.token]);

  useEffect(() => {
    getSetsCollection();
  }, [getSetsCollection]);

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
        {setsCollection &&
          setsCollection.map((set) => (
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
      </MainArea>
    </>
  );
};

export default CollectionSetsPage;
