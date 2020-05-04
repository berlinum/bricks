import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Photo from '../assets/icons/photo.svg';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const Image = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 50%;
`;

const Change = styled.img`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 72px;
  left: 180px;
`;
const Input = styled.input`
  display: none;
`;
const Upload = styled.label`
  border-radius: 50%;
  cursor: pointer;
`;

const AvatarSmall = ({ onChange, url }) => {
  return (
    <Container>
      <Image src={url} />
      <Upload>
        <Change src={Photo} />
        <Input type="file" accept="image/*" onChange={onChange} />
      </Upload>
    </Container>
  );
};

AvatarSmall.propTypes = {
  onChange: PropTypes.func,
  url: PropTypes.string,
};

export default AvatarSmall;
