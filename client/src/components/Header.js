import React from 'react';
import styled from '@emotion/styled';
import colors from '../utils/colors';

export const HeaderBox = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  background-color: ${colors.bgDark};
`;

export const TtileBox = styled.div`
  font-family: SF Pro Display Semibold;
  font-size: 30px;
  color: ${colors.textActive};
  margin: 44px 0 0 30px;
`;

export const Header = () => (
  <HeaderBox>
    <TtileBox>Collection</TtileBox>
  </HeaderBox>
);

export default Header;
