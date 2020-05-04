import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import colors from '../utils/colors';

const Container = styled.article`
  display: flex;
  flex-flow: column nowrap;
  max-width: 730px;
  margin: 23px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.4);
`;
const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 243px;
  background-color: ${colors.bgWhite};
  border-radius: 5px 5px 0 0;
`;
const Image = styled.img`
  object-fit: contain;
  height: 233px;
  width: 300px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 10px 18px;
  border-radius: 0 0 5px 5px;
  background-color: ${colors.bgSecondary};
  font-family: SF Pro Rounded Regular;
`;

const Title = styled.h2`
  font-size: 35px;
  margin: 5px 0;
  color: ${colors.textPrimary};
`;

const Subtitle = styled.h3`
  margin: 5px 0;
  color: ${colors.textSecondary};
  font-family: SF Pro Rounded Regular;
  font-size: 28px;
`;

const Description = styled.article`
  color: ${colors.textPrimary};
  font-size: 18px;
`;

export const CardDetail = ({ details }) => {
  return (
    <Container>
      <ImageBox>
        <Image src={details.img} />
      </ImageBox>
      <InfoBox key={details.id}>
        <Title>{details.title}</Title>
        <Subtitle>{details.subtitle}</Subtitle>
        <Description
          dangerouslySetInnerHTML={{ __html: details.description }}
        />
      </InfoBox>
    </Container>
  );
};

CardDetail.propTypes = {
  details: PropTypes.object,
};

export default CardDetail;
