import React from 'react';
import styled from '@emotion/styled';
import colors from '../utils/colors';
import { action } from '@storybook/addon-actions';
import { HeaderBox, TtileBox } from './Header';
import { Arrow, Delete } from '../assets/icons/Actions';

const TitleWithAction = styled(TtileBox)`
  display: flex;
  margin-left: 0;
  flex-grow: 1;
  justify-content: center;
`;

const Action = styled.button`
  display: flex;
  width: 78px;
  margin: 17px 10px 0 10px;
  justify-content: center;
  align-items: center;
  color: ${colors.systemAction};
  background-color: transparent;
  border: none;
  outline: none;
`;

const Label = styled.span`
  font-family: SF Pro Text Regular;
  font-size: 18px;
  margin: 5px;
`;

export const HeaderWithActions = () => (
  <HeaderBox>
    <Action onClick={action('clicked')}>
      <Arrow />
      <Label>Back</Label>
    </Action>
    <TitleWithAction>Collection</TitleWithAction>
    <Action onClick={action('clicked')}>
      <Delete />
    </Action>
  </HeaderBox>
);

export default HeaderWithActions;
