import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import colors from '../utils/colors';

const Container = styled.article`
  display: flex;
  flex-flow: column nowrap;
  width: 330px;
  height: 350px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.4);
`;
const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 243px;
  border-radius: 5px 5px 0 0;
`;
const Image = styled.img`
  object-fit: cover;
  height: 233px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 107px;
  border-radius: 0 0 5px 5px;
  background-color: ${colors.bgSecondary};
`;

const Title = styled.h1`
  font-family: SF Pro Rounded Regular;
  font-size: 35px;
  margin: 0 0 4px 18px;
  color: ${colors.textPrimary};
`;

const Info = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
`;

const InfoItem = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 6px 0 0 0;
  font-family: SF Pro Rounded Regular;
`;

const InfoData = styled.span`
  color: ${colors.textSecondary};
  font-size: 20px;
`;

const InfoLabel = styled.span`
  color: ${colors.textInfo};

  font-size: 12px;
`;

export const CardItem = ({ details }) => {
  return (
    <Container>
      <ImageBox>
        <Image src={details.img} />
      </ImageBox>
      <InfoBox key={details.id}>
        <Title>{details.title}</Title>
        <Info>
          <InfoItem>
            <InfoData>{details.pieces}</InfoData>
            <InfoLabel>Pieces</InfoLabel>
          </InfoItem>
          <InfoItem>
            <InfoData>{details.item}</InfoData>
            <InfoLabel>#Item</InfoLabel>
          </InfoItem>
          <InfoItem>
            <InfoData>{details.year}</InfoData>
            <InfoLabel>Year</InfoLabel>
          </InfoItem>
        </Info>
      </InfoBox>
    </Container>
  );
};

CardItem.propTypes = {
  details: PropTypes.object,
};

export default CardItem;
