import React from 'react';
import CardSearchResult from '../components/CardSearchResult';
import Img from '../assets/img/Bus.jpg';

export default {
  title: 'Card',
  component: CardSearchResult,
};

export const SearchResult = () => (
  <CardSearchResult
    details={{
      id: 123,
      title: 'London Bus',
      pieces: 1686,
      item: 10258,
      theme: 'Creator',
      age: '16+',
      price: 120,
      year: 2017,
      img: Img,
    }}
  />
);
