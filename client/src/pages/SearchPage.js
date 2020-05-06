import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useQuery } from 'react-query';
import cogoToast from 'cogo-toast';
import useHttp from '../hooks/useHttp.hook';
import useThrottling from '../hooks/useThrottling.hook';
import AuthContext from '../context/AuthContext';
import Header from '../components/Header/Header';
import Title from '../components/Header/Title';
import MainArea from '../components/MainArea';
import CardSearchResult from '../components/CardSearchResult';
import { Loading } from '../assets/icons/Loading';
import SearchInput from '../components/SearchInput';
import FloatingButton from '../components/FloatingButton';
import Message from '../components/Message';

const SearchPage = () => {
  const auth = useContext(AuthContext);
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
      const data = await request('/api/collection/mysets/add', 'POST', set, {
        Authorization: `Bearer ${auth.token}`,
      });
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

  const { status, data, error } = useQuery(throttledValue, getSet);
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
          data.results.map((set) => (
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
      </MainArea>
    </>
  );
};

export default SearchPage;
