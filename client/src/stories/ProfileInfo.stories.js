import React from 'react';
import ProfileInfo from '../components/ProfileInfo';
import styled from '@emotion/styled';

export default {
  title: 'Profile',
  component: ProfileInfo,
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 375px;
  height: 500px;
`;

export const InfoBox = () => (
  <Container>
    <ProfileInfo counter={{ id: 123, sets: 15, parts: 16.379 }} />
  </Container>
);
