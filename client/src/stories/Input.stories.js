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

const Card = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 375px;
  height: 300px;
  background-color: ${colors.bgDark};
  justify-content: center;
  align-items: center;
`;

export const LoginForm = () => (
  <Card>
    <Input
      size="large"
      placeholder="Email"
      value={text('')}
      onChange={action('user input')}
    />
    <Input
      size="large"
      value={text('')}
      type="password"
      placeholder="Password"
      onChange={action('user input')}
    />
  </Card>
);
