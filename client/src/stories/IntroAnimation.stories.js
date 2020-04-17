import React from 'react';
import IntroAnimation from '../components/IntroAnimation';
import styled from '@emotion/styled';
import colors from '../utils/colors';

export default {
  title: 'Intro',
  component: IntroAnimation,
};

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 375px;
  height: 500px;
  background-color: ${colors.bgDark};
  justify-content: center;
  align-items: center;
`;

export const Animation = () => (
  <Container>
    <IntroAnimation />
  </Container>
);
