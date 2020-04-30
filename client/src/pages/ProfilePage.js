import React, { useContext, useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import Button from '../components/Button';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import colors from '../utils/colors';
import Avatar from '../components/Avatar';
import ProfileInfo from '../components/ProfileInfo';
import { useHttp } from '../hooks/useHttp.hook';

const MainContainer = styled.main`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  overflow: scroll;
`;

const ButtonDanger = styled(Button)`
  background-color: ${colors.bgDanger};
`;

const ProfilePage = () => {
  const history = useHistory();
  const [setsCount, setSetsCount] = useState(null);
  const [setsParts, setPartsCount] = useState(null);
  const { request } = useHttp();
  const auth = useContext(AuthContext);

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push('/');
  };

  const getSetsCount = useCallback(async () => {
    try {
      const data = await request(
        '/api/collection/mysets/all/count',
        'GET',
        null
      );
      setSetsCount(data);
    } catch (error) {
      console.error(error);
    }
  }, [request]);

  useEffect(() => {
    getSetsCount();
  }, [getSetsCount]);

  const getSetsParts = useCallback(async () => {
    try {
      const data = await request(
        '/api/collection/myparts/all/count',
        'GET',
        null
      );
      const total = data.map((parts) => parts.total_sum);
      setPartsCount(total.toLocaleString('de-DE'));
    } catch (error) {
      console.error(error);
    }
  }, [request]);

  useEffect(() => {
    getSetsParts();
  }, [getSetsParts]);
  return (
    <>
      <Header title="Profile" />
      <MainContainer>
        <Avatar name={'Berlinum'} />
        <ProfileInfo
          counter={{
            sets: setsCount,
            parts: setsParts,
          }}
        />
        <ButtonDanger onClick={logoutHandler}>Log Out</ButtonDanger>
      </MainContainer>
    </>
  );
};

export default ProfilePage;
