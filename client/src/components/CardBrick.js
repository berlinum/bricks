import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import colors from '../utils/colors';

const Container = styled.article`
  display: flex;
  flex-flow: column nowrap;
  width: 154px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.4);
`;
const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 169px;
  padding: 0;
  background-color: ${colors.bgWhite};
  border-radius: 5px 5px 0 0;
`;

const Image = styled.img`
  object-fit: cover;
  height: 129px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  border-radius: 0 0 5px 5px;
  background-color: ${colors.bgSecondary};
`;

const Title = styled.h1`
  font-family: SF Pro Rounded Medium;
  font-size: 24px;
  margin: 4px 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${colors.textPrimary};
`;

const Info = styled.div`
  display: flex;
  padding-bottom: 10px;
  flex-flow: column nowrap;
  justify-content: space-around;
`;

const InfoItem = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 3px 23px;
  font-family: SF Pro Rounded Regular;
`;

const InfoData = styled.span`
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${colors.textSecondary};
`;

const InfoLabel = styled.span`
  font-size: 12px;
  color: ${colors.textInfo};
`;

const CardBrick = ({ details }) => {
  return (
    <Container>
      <ImageBox>
        <Image src={details.img} />
      </ImageBox>
      <InfoBox key={details.id}>
        <Title>{details.title}</Title>
        <Info>
          <InfoItem>
            <InfoLabel>Element ID:</InfoLabel>
            <InfoData>{details.element}</InfoData>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Color:</InfoLabel>
            <InfoData>{details.color}</InfoData>
          </InfoItem>
          <InfoItem>
            <InfoLabel>My Parts:</InfoLabel>
            <InfoData>
              100
              {/* {details.counter} */}
            </InfoData>
          </InfoItem>
        </Info>
      </InfoBox>
    </Container>
  );
};

CardBrick.propTypes = {
  details: PropTypes.object,
};

export default CardBrick;
