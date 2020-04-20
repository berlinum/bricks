import React from 'react';
import styled from '@emotion/styled';
import { bounceDown, bounceUp } from '../utils/animations';
import Logo from '../assets/icons/logo.svg';
import colors from '../utils/colors';

const IntroLogo = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${Logo});
  position: relative;
  bottom: -50px;
  opacity: 0;
  animation: ${bounceDown} 3s linear 1;
  animation-delay: 2s;
  animation-fill-mode: forwards;
`;

const IntroName = styled.span`
  position: relative;
  font-family: 'Ornitons Heavy Regular';
  font-size: 70px;
  color: ${colors.textActiv};
  bottom: -50px;
  opacity: 0;
  animation: ${bounceUp} 3s linear 1;
  animation-delay: 2s;
  animation-fill-mode: forwards;
`;

const IntroAnimation = () => (
  <>
    <IntroLogo />
    <IntroName>BRICKS</IntroName>
  </>
);

export default IntroAnimation;
