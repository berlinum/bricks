import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import styled from '@emotion/styled';
import colors from '../utils/colors';

export default {
  title: 'Button',
  component: Button,
};

const ButtonContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const ButtonDanger = styled(Button)`
  background-color: ${colors.bgDanger};
`;

export const SubmitButton = () => (
  <ButtonContainer>
    <Button onClick={action('clicked')}>Sign Up</Button>
    <ButtonDanger onClick={action('clicked')}>Log Out</ButtonDanger>
  </ButtonContainer>
);
