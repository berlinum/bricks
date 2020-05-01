import React from 'react';
import Input from '../components/Input';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import styled from '@emotion/styled';
import colors from '../utils/colors';

export default {
  title: 'Input',
  component: Input,
  decorators: [withKnobs],
};

const InputContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 375px;
  height: 300px;
  background-color: ${colors.bgDark};
  justify-content: center;
  align-items: center;
`;

export const LoginForm = () => (
  <InputContainer>
    <Input
      inputs={[
        { placeholder: 'Email', name: 'email', type: 'text' },
        { placeholder: 'Password', name: 'password', type: 'password' },
      ]}
      onChange={action('user input')}
      value={text('')}
    />
  </InputContainer>
);
