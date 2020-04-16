import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Plus from '../assets/icons/whitePlus.svg';
import colors from '../utils/colors';

const AddButton = styled.button`
  width: 70px;
  height: 70px;
  border: none;
  border-radius: 50%;
  background-color: ${colors.systemAction};
  background-image: url(${Plus});
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  transform: rotate(${(props) => (props.active ? 45 : 0)}deg);
  transition: 0.5s;
  &:focus {
    outline: none;
    transform: rotate(45deg);
    transition: 0.5s;
  }
`;

export const FloatingButton = ({ value, onButtonClick }) => (
  <AddButton active={value} onClick={() => onButtonClick()} />
);

FloatingButton.propTypes = {
  value: PropTypes.bool,
  onButtonClick: PropTypes.func,
};
