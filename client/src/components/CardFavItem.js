import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import colors from '../utils/colors';
import FavoriteIcon from '../components/Favorite';

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
  position: relative;
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
  flex-flow: row nowrap;
  justify-content: space-around;
`;

const InfoItem = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1 1 0;
  margin: 0 3px 20px 3px;
  font-family: SF Pro Rounded Regular;
  overflow: hidden;
  white-space: nowrap;
`;

const InfoData = styled.span`
  color: ${colors.textSecondary};
  font-size: 28px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

const InfoLabel = styled.span`
  color: ${colors.textInfo};
  font-size: 18px;
  text-align: center;
`;

export const CardItem = ({ details, onFavClick }) => {
  return (
    <Container>
      <ImageBox>
        <FavoriteIcon onFavClick={onFavClick} active={true} />
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
  onFavClick: PropTypes.func,
};

export default CardItem;
