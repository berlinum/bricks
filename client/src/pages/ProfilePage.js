import React, { useContext } from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import Button from '../components/Button';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import colors from '../utils/colors';

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
  const auth = useContext(AuthContext);
  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push('/');
  };
  return (
    <>
      <Header title="Profile" />
      <MainContainer>
        <h1>Profile</h1>
        <ButtonDanger onClick={logoutHandler}>Log Out</ButtonDanger>
      </MainContainer>
    </>
  );
};

export default ProfilePage;
