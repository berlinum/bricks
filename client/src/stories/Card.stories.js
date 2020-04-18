import React from 'react';
import { Card } from '../components/Card';
import Img from '../assets/img/Bus.jpg';

export default {
  title: 'Card',
  component: Card,
};

export const ItemCard = () => (
  <Card
    details={{
      id: 123,
      title: 'London Bus',
      pieces: 1686,
      item: 10258,
      year: 2017,
      img: Img,
    }}
  />
);
