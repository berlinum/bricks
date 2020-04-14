import React from 'react';
import Input from '../components/Input';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Input',
  component: Input,
  decorators: [withKnobs],
};

export const InputEmail = () => (
  <Input
    size="large"
    placeholder="Email"
    value={text('')}
    onChange={action('user input')}
  />
);

export const InputPassword = () => (
  <Input
    size="large"
    value={text('')}
    type="password"
    placeholder="Password"
    onChange={action('user input')}
  />
);
