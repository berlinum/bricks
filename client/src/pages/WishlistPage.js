import React, { useCallback, useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Title from '../components/Header/Title';
import MainArea from '../components/MainArea';
import useHttp from '../hooks/useHttp.hook';
import CardFavItem from '../components/CardFavItem';
import { useQuery } from 'react-query';

const WishlistPage = () => {
  const [favSets, setFavSets] = useState([]);
  const { request, error, clearError } = useHttp();

  useEffect(() => {
    error && console.error(error);
    clearError();
  }, [error, clearError]);

  const getFavSets = useCallback(async () => {
    try {
      const data = await request(
        '/api/collection/mysets/allfavorites',
        'GET',
        null
      );
      setFavSets(data);
    } catch (e) {
      // empty
    }
  }, [request]);

  useEffect(() => {
    getFavSets();
  }, [getFavSets]);

  const { refetch } = useQuery(favSets, getFavSets);

  const deleteSetFromFavs = async (setId) => {
    try {
      await request(
        `/api/collection/mysets/${setId._id}/deletefav`,
        'DELETE',
        null
      );
    } catch (e) {
      // empty
    }
  };

  const handleDeleteSetFromFavs = async (setId) => {
    await deleteSetFromFavs(setId);
    await refetch();
  };

  return (
    <>
      <Header>
        <Title>Wishlist</Title>
      </Header>
      <MainArea>
        {favSets &&
          favSets.map((set) => (
            <CardFavItem
              key={set._id}
              details={{
                id: set._id,
                title: set.name,
                item: set.set_num,
                year: set.year,
                pieces: set.num_parts,
                img: set.set_img_url,
              }}
              onFavClick={() => handleDeleteSetFromFavs(set)}
            />
          ))}
      </MainArea>
    </>
  );
};

export default WishlistPage;
