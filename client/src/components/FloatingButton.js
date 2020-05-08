import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Plus from '../assets/icons/whitePlus.svg';
import colors from '../utils/colors';

const AddButton = styled.button`
  position: absolute;
  z-index: 10;
  width: 70px;
  height: 70px;
  border: none;
  border-radius: 50%;
  background-color: ${colors.bgAction};
  background-image: url(${Plus});
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.4);
  transform: rotate(${(props) => (props.active ? 135 : 0)}deg);
  transition: 0.5s;
  &:focus {
    outline: none;
  }
  bottom: 100px;
  right: 13px;
`;

const FloatingButton = ({ value, onButtonClick }) => (
  <AddButton active={value} onClick={() => onButtonClick()} />
);

FloatingButton.propTypes = {
  value: PropTypes.bool,
  onButtonClick: PropTypes.func,
};

export default FloatingButton;
