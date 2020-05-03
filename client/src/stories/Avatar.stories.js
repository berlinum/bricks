import React from 'react';
import styled from '@emotion/styled';
import Avatar from '../components/Avatar';
import Photo from '../assets/img/avatar.jpeg';

export default {
  title: 'Profile',
  component: Avatar,
};

const Container = styled.div`
  width: 475px;
`;

export const ProfileAvatar = () => (
  <Container>
    <Avatar name="Berlinum" url={Photo} />
  </Container>
);
