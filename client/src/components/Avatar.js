import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const Photo = styled.img`
  height: 127px;
  width: 127px;
  object-fit: cover;
  border-radius: 50%;
`;

const Name = styled.span`
  margin: 10px 0;
  font-family: SF Pro Display Medium;
  font-size: 41px;
`;

export const Avatar = ({ name, url }) => {
  return (
    <Container>
      <Photo src={url} />
      <Name>{name}</Name>
    </Container>
  );
};

Avatar.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};

export default Avatar;
