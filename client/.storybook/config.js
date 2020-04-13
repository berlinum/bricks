import React from 'react';
import { addDecorator } from '@storybook/react';
import GlobalStyles from '../src/GlobalStyles';

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
));
