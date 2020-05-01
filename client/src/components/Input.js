import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import colors from '../utils/colors';

const InputField = styled.input`
  margin: 10px 0;
  min-width: 280px;
  height: 46px;
  background-color: ${colors.bgLight};
  color: ${colors.textPrimary};
  border: none;
  border-radius: 5px;
  padding-left: 15px;
  text-align: left;
  font-size: 20px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  &:focus {
    outline: ${colors.systemAction};
    box-shadow: 0 0 3px 2px ${colors.systemAction};
  }
  &::placeholder {
    color: ${colors.textInfo};
  }
`;

const Input = ({ inputs }) => {
  return inputs.map((input) => (
    <InputField
      key={input.name}
      placeholder={input.placeholder}
      name={input.name}
      type={input.type}
    />
  ));
};
Input.propTypes = {
  input: PropTypes.array,
};
export default Input;
