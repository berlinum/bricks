import React, { useState } from 'react';
import Header from '../components/Header';
import styled from '@emotion/styled';
import { useQuery } from 'react-query';
import CardSearchResult from '../components/CardSearchResult';
import { Loading } from '../assets/icons/Loading';
import useThrottling from '../hooks/useThrottling.hook';
import SearchInput from '../components/SearchInput';
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

const SearchPage = () => {
  const [value, setValue] = useState('');
  const [cancel, setCancel] = useState(true);
  const throttledValue = useThrottling(value, 700);
  const { request } = useHttp();

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  const handleClick = async (set) => {
    try {
      await request('/api/collection/mysets/add', 'POST', set);
    } catch (error) {
      console.error(error);
    }
  };

  const getSets = async () => {
    try {
      const data = await request(`/api/search/sets?q=${throttledValue}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const { status, data, error } = useQuery(throttledValue, getSets);
  if (status === 'loading')
    return (
      <>
        <Header title="New Set" />
        <SearchInput value={value} onChange={changeHandler} />
        <MainContainer>
          <Loading />
          <FloatingButton
            value={cancel}
            onButtonClick={() => {
              setCancel(!cancel);
            }}
          />
        </MainContainer>
      </>
    );
  if (status === 'error') return <div>Oops! :( {error}</div>;
  if (!data)
    return (
      <>
        <Header title="New Set" />
        <SearchInput value={value} onChange={changeHandler} />
        <MainContainer>
          <NavLink to="/collection/mysets">
            <FloatingButton
              value={cancel}
              onButtonClick={() => {
                setCancel(!cancel);
              }}
            />
          </NavLink>
        </MainContainer>
      </>
    );

  return (
    <>
      <Header title="New Set" />
      <SearchInput value={value} onChange={changeHandler} />
      <MainContainer>
        <NavLink to="/collection/mysets">
          <FloatingButton
            value={cancel}
            onButtonClick={() => {
              setCancel(!cancel);
            }}
          />
        </NavLink>
        {data.results.map((set) => (
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
            onAddClick={() => handleClick(set)}
          />
        ))}
      </MainContainer>
    </>
  );
};

export default SearchPage;
