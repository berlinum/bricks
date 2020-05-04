import React, { useContext, useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header/Header';
import Button from '../components/Button';
import { useHistory } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import colors from '../utils/colors';
import Avatar from '../components/Avatar';
import ProfileInfo from '../components/ProfileInfo';
import useHttp from '../hooks/useHttp.hook';
import Title from '../components/Header/Title';
import Action from '../components/Header/Action';
import Label from '../components/Header/Label';
import { NavLink } from 'react-router-dom';
import MainArea from '../components/MainArea';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const ButtonDanger = styled(Button)`
  background-color: ${colors.bgDanger};
`;

const Link = styled(NavLink)`
  position: absolute;
  z-index: 1;
  right: 0;
  text-decoration: none;
`;

const ProfilePage = () => {
  const history = useHistory();
  const [setsCount, setSetsCount] = useState(null);
  const [setsParts, setPartsCount] = useState(null);
  const [user, setUser] = useState(null);
  const [url, setUrl] = useState(null);
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
        null,
        {
          Authorization: `Bearer ${auth.token}`,
        }
      );
      setSetsCount(data);
    } catch (error) {
      console.error(error);
    }
  }, [request, auth.token]);

  useEffect(() => {
    getSetsCount();
  }, [getSetsCount]);

  const getSetsParts = useCallback(async () => {
    try {
      const data = await request(
        '/api/collection/myparts/all/count',
        'GET',
        null,
        {
          Authorization: `Bearer ${auth.token}`,
        }
      );
      const total = data.map((parts) => parts.total_sum);
      setPartsCount(total.toLocaleString('de-DE'));
    } catch (error) {
      console.error(error);
    }
  }, [request, auth.token]);

  useEffect(() => {
    getSetsParts();
  }, [getSetsParts]);

  const getUser = useCallback(async () => {
    try {
      const data = await request('/api/collection/profile', 'GET', null, {
        Authorization: `Bearer ${auth.token}`,
      });
      setUser(data.name);
      setUrl(data.img);
    } catch (error) {
      console.error(error);
    }
  }, [request, auth.token]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <>
      <Header>
        <Title>Profile</Title>
        <Link to="/edit">
          <Action>
            <Label>Edit</Label>
          </Action>
        </Link>
      </Header>
      <MainArea>
        <Container>
          <Avatar name={user} url={url} />
          <ProfileInfo
            counter={{
              sets: setsCount,
              parts: setsParts,
            }}
          />
          <ButtonDanger onClick={logoutHandler}>Log Out</ButtonDanger>
        </Container>
      </MainArea>
    </>
  );
};

export default ProfilePage;
