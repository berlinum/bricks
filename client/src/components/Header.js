import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import colors from '../utils/colors';

export const HeaderBox = styled.div`
  display: flex;
  flex: 0 0 100px;
  width: 100%;
  background-color: ${colors.bgDark};
`;

export const TitleBox = styled.div`
  font-family: SF Pro Display Semibold;
  font-size: 30px;
  color: ${colors.textActive};
  margin: 44px 0 0 30px;
`;

export const Header = ({ title }) => {
  return (
    <HeaderBox>
      <TitleBox>{title}</TitleBox>
    </HeaderBox>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
