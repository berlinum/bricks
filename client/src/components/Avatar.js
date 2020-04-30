import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Img from '../assets/img/avatar.jpeg';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const Photo = styled.img`
  height: 127px;
  object-fit: cover;
  border-radius: 50%;
`;

const Name = styled.span`
  margin: 10px 0;
  font-family: SF Pro Display Medium;
  font-size: 41px;
`;

export const Avatar = ({ name }) => {
  return (
    <Container>
      <Photo src={Img} />
      <Name>{name}</Name>
    </Container>
  );
};

Avatar.propTypes = {
  name: PropTypes.string,
};

export default Avatar;
