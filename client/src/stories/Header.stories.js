import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header/Header';
import Title from '../components/Header/Title';
import Action from '../components/Header/Action';
import Label from '../components/Header/Label';
import { Arrow } from '../assets/icons/Actions';

export default {
  title: 'Header',
  component: Header,
};

const Container = styled(Header)`
  width: 475px;
  height: 100px;
`;

const TitleCenter = styled(Title)`
  margin: 30px 0 0 20px;
  text-align: center;
`;

const ActionContainer = styled(Action)`
  position: absolute;
`;

export const HeaderDefault = () => (
  <Container>
    <Title>Collection</Title>
  </Container>
);

export const HeaderwithAction = () => (
  <Container>
    <ActionContainer>
      <Arrow />
      <Label>Back</Label>
    </ActionContainer>
    <TitleCenter>Profile</TitleCenter>
  </Container>
);
