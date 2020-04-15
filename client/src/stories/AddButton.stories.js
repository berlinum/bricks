import React from 'react';
import { action } from '@storybook/addon-actions';
import { AddButton } from '../components/AddButton';

export default {
  title: 'Button',
  component: AddButton,
};

export const AnimatedAddButton = () => (
  <AddButton onClick={action('clicked')} />
);
