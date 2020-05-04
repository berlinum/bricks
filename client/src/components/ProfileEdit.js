import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import colors from '../utils/colors';

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  margin: 50px 0 0 0;
  min-width: 230px;
  background: ${colors.bgLight};
`;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 0 0 20px 0;
`;

const Label = styled.label`
  font-family: 'SF Pro Display Regular';
  font-size: 16px;
  color: ${colors.textSecondary};
`;

const Input = styled.input`
  font-family: 'SF Pro Display Medium';
  font-size: 26px;
  color: ${colors.textPrimary};
  background: ${colors.bgLight};
  border: none;
  border-bottom: 2px solid ${colors.bgSecondary};
  &::placeholder {
    font-family: 'SF Pro Display Regular';
    color: ${colors.textInfo};
  }
`;

const ProfileEdit = ({ form }) => {
  return (
    <Form>
      {form.map((input) => (
        <Container key={input.name}>
          <Label htmlFor={input.name}>{input.name}</Label>
          <Input
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
          />
        </Container>
      ))}
    </Form>
  );
};

ProfileEdit.propTypes = {
  form: PropTypes.array,
};

export default ProfileEdit;
