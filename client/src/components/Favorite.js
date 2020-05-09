import React from 'react';
import styled from '@emotion/styled';
import Favorite from '../assets/icons/Favorite';
import PropTypes from 'prop-types';

const FavIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 15px;
  cursor: pointer;
  z-index: 1;
`;

const FavoriteIcon = ({ onFavClick, active }) => (
  <FavIcon onClick={onFavClick}>
    <Favorite active={active} />
  </FavIcon>
);

FavoriteIcon.propTypes = {
  active: PropTypes.bool,
  onFavClick: PropTypes.func,
};

export default FavoriteIcon;
