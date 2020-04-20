import React from 'react';
import CardItem from '../components/CardItem';
import Img from '../assets/img/Bus.jpg';

export default {
  title: 'Card',
  component: CardItem,
};

export const ItemCard = () => (
  <CardItem
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
