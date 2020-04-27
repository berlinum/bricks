import React from 'react';
import styled from '@emotion/styled';
import colors from '../utils/colors';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex: 0 0 46px;
  width: 100vw;
  justify-content: center;
  background: ${colors.textActive};
`;

const Input = styled.input`
  display: flex;
  width: 100%;
  min-width: 315px;
  max-width: 415px;
  margin: 8px 30px;
  padding: 0 8px;
  border-radius: 6px;
  border: none;
  outline: none;
  font-family: 'SF Pro Text Regular';
  font-size: 16px;
  color: ${colors.textPrimary};
  &::placeholder {
    color: ${colors.textInfo};
  }
`;

const SearchInput = ({ value, onChange }) => {
  return (
    <Container>
      <Input
        type="search"
        placeholder="Search by name or set number"
        value={value}
        onChange={onChange}
      ></Input>
    </Container>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchInput;
