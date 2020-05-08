import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useQuery } from 'react-query';
import cogoToast from 'cogo-toast';
import useHttp from '../hooks/useHttp.hook';
import useThrottling from '../hooks/useThrottling.hook';
import Header from '../components/Header/Header';
import Title from '../components/Header/Title';
import MainArea from '../components/MainArea';
import CardSearchResult from '../components/CardSearchResult';
import { Loading } from '../assets/icons/Loading';
import SearchInput from '../components/SearchInput';
import FloatingButton from '../components/FloatingButton';
import Message from '../components/Message';

const SearchPage = () => {
  const [value, setValue] = useState('');
  const [cancel, setCancel] = useState(true);
  const throttledValue = useThrottling(value, 700);
  const { request } = useHttp();

  const getSet = async () => {
    try {
      const data = await request(`/api/search/set?q=${throttledValue}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const postSet = async (set) => {
    try {
      const data = await request('/api/collection/mysets/add', 'POST', set);
      cogoToast.loading(<Message>Add new set...</Message>).then(() => {
        cogoToast.success(<Message>{data.message}</Message>);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  const handleClick = (set) => {
    postSet(set);
  };

  const { status, data, error, refetch } = useQuery(throttledValue, getSet);

  const postSetToFavs = async (set) => {
    try {
      const data = await request('/api/collection/mysets/fav', 'POST', set);
      await cogoToast.loading(<Message>Add new set to wishlist...</Message>);
      cogoToast.success(<Message>{data.message}</Message>);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePostSetToFavs = async (set) => {
    await postSetToFavs(set);
    await refetch();
  };

  return (
    <>
      <Header>
        <Title>New Set</Title>
      </Header>
      <SearchInput value={value} onChange={changeHandler} />
      <MainArea>
        <NavLink to="/collection/mysets">
          <FloatingButton
            value={cancel}
            onButtonClick={() => {
              setCancel(!cancel);
            }}
          />
        </NavLink>
        {status === 'error'
          ? cogoToast.error(<Message>{error.message}</Message>)
          : null}
        {status === 'loading' ? <Loading /> : null}
        {data &&
          data.map((set) => (
            <CardSearchResult
              key={set.set_num}
              details={{
                id: set.set_num,
                title: set.name,
                item: set.set_num,
                year: set.year,
                pieces: set.num_parts,
                img: set.set_img_url,
              }}
              isFav={set.isFav}
              onAddClick={() => handleClick(set)}
              onFavClick={() => handlePostSetToFavs(set)}
            />
          ))}
      </MainArea>
    </>
  );
};

export default SearchPage;
