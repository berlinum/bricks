import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import colors from '../utils/colors';
import Button from '../components/Button';

const Container = styled.article`
  display: flex;
  flex-flow: column nowrap;
  width: 330px;
  margin: 15px;
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
  width: 330px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  padding-bottom: 20px;
  border-radius: 0 0 5px 5px;
  background-color: ${colors.bgSecondary};
`;

const Title = styled.h2`
  font-family: SF Pro Rounded Regular;
  font-size: 35px;
  margin: 10px 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${colors.textPrimary};
`;

const Info = styled.div`
  display: flex;
  padding-bottom: 10px;
  justify-content: space-around;
`;

const InfoItem = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1 1 0;
  margin: 6px 3px 0 3px;
  font-family: SF Pro Rounded Regular;
  text-align: center;
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
  margin: 10px 20px;
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
            <InfoLabel>Pieces</InfoLabel>
            <InfoData>{details.pieces}</InfoData>
          </InfoItem>
          <InfoItem>
            <InfoLabel>#Item</InfoLabel>
            <InfoData>{details.item}</InfoData>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Year</InfoLabel>
            <InfoData>{details.year}</InfoData>
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
