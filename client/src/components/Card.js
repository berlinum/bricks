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
const Image = styled.img`
  display: flex;
  object-fit: cover;
  height: 243px;
  padding: 0;
  border-radius: 5px 5px 0 0;
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
  font-family: SF Pro Rounded Medium;
  font-size: 35px;
  font-weight: 500;
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
  font-family: SF Pro Rounded Regular;
  color: ${colors.textSecondary};
`;

const InfoData = styled.span`
  font-size: 20px;
`;

const InfoLabel = styled.span`
  font-size: 12px;
`;

export const Card = ({ details }) => {
  return (
    <Container>
      <Image src={details.img} />
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

Card.propTypes = {
  details: PropTypes.object,
};
