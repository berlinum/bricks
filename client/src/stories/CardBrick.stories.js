import React from 'react';
import CardBrick from '../components/CardBrick';
import Img from '../assets/img/Brick.jpeg';

export default {
  title: 'Card',
  component: CardBrick,
};

export const BrickCard = () => (
  <CardBrick
    details={{
      id: 123,
      title: 'Brick 2X2',
      element: 300323,
      color: 'Bright Blue',
      counter: 100,
      img: Img,
    }}
  />
);
