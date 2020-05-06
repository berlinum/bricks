import React, { useState, useCallback, useEffect, useContext } from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header/Header';
import Title from '../components/Header/Title';
import ProfileEdit from '../components/ProfileEdit';
import AvatarSmall from '../components/AvatarSmall';
import Button from '../components/Button';
import Action from '../components/Header/Action';
import Label from '../components/Header/Label';
import { Arrow } from '../assets/icons/Actions';
import useHttp from '../hooks/useHttp.hook';
import AuthContext from '../context/AuthContext';
import { NavLink } from 'react-router-dom';
import MainArea from '../components/MainArea';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const TitleCenter = styled(Title)`
  margin: 30px 0 0 0;
  text-align: center;
`;

const Link = styled(NavLink)`
  position: absolute;
  z-index: 1;
  text-decoration: none;
`;

const ProfileEditPage = () => {
  const { request } = useHttp();
  const auth = useContext(AuthContext);
  const [user, setUser] = useState('');
  const [url, setUrl] = useState('');
  const [file, setFile] = useState([]);

  const getUser = useCallback(async () => {
    try {
      const data = await request('/api/collection/profile', 'GET', null);
      setUser(data);
      setUrl(data.img);
    } catch (error) {
      console.error(error);
    }
  }, [request]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  const postUpload = useCallback(async () => {
    const formData = new FormData();
    formData.append('file', file[0]);
    try {
      const cloudFile = await fetch('/api/upload/profile', {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      }).then((response) => response.json());
      setUrl(cloudFile);
    } catch (error) {
      console.error(error);
    }
  }, [file, auth.token]);

  useEffect(() => {
    postUpload();
  }, [postUpload]);

  return (
    <>
      <Header>
        <Link to="/profile">
          <Action>
            <Arrow />
            <Label>Back</Label>
          </Action>
        </Link>
        <TitleCenter>Profile</TitleCenter>
      </Header>
      <MainArea>
        <Container>
          <AvatarSmall
            url={url}
            onChange={(event) => setFile(event.target.files)}
          />
          <ProfileEdit
            form={[
              {
                name: 'Name:',
                type: 'text',
                placeholder: user.name,
              },
              { name: 'Change email:', type: 'text', placeholder: user.email },
              { name: 'New password:', type: 'password' },
              { name: 'Confirm new password:', type: 'password' },
            ]}
          />
          <Button>Save</Button>
        </Container>
      </MainArea>
    </>
  );
};

export default ProfileEditPage;
