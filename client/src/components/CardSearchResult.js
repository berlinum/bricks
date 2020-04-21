import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import colors from '../utils/colors';
import Button from '../components/Button';

const Container = styled.article`
  display: flex;
  flex-flow: column nowrap;
  min-width: 330px;
  height: 566px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.4);
`;
const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 243px;
  width: 100%;
  border-radius: 5px 5px 0 0;
`;
const Image = styled.img`
  object-fit: cover;
  height: 233px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  height: 324px;
  width: 100%;
  border-radius: 0 0 5px 5px;
  background-color: ${colors.bgSecondary};
`;

const Title = styled.h2`
  align-self: flex-start;
  font-family: SF Pro Rounded Regular;
  font-size: 35px;
  margin: 0 0 4px 18px;
  color: ${colors.textPrimary};
`;

const Info = styled.div`
  display: flex;
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
  font-size: 28px;
`;

const InfoLabel = styled.span`
  color: ${colors.textInfo};
  font-size: 18px;
`;

const AddButton = styled(Button)`
  align-self: center;
  width: 230px;
`;

export const CardSearchResult = ({ details }) => {
  return (
    <Container>
      <ImageBox>
        <Image src={details.img} />
      </ImageBox>
      <InfoBox key={details.id}>
        <Title>{details.title}</Title>
        <Info>
          <InfoItem>
            <InfoLabel>#Item</InfoLabel>
            <InfoData>{details.item}</InfoData>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Theme</InfoLabel>
            <InfoData>{details.theme}</InfoData>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Year</InfoLabel>
            <InfoData>{details.year}</InfoData>
          </InfoItem>
        </Info>
        <Info>
          <InfoItem>
            <InfoLabel>Pieces</InfoLabel>
            <InfoData>{details.pieces}</InfoData>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Price</InfoLabel>
            <InfoData>{details.price}€</InfoData>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Age</InfoLabel>
            <InfoData>{details.age}</InfoData>
          </InfoItem>
        </Info>
        <AddButton>Add</AddButton>
      </InfoBox>
    </Container>
  );
};

CardSearchResult.propTypes = {
  details: PropTypes.object,
};

export default CardSearchResult;
