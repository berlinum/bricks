import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import colors from '../utils/colors';

const Card = styled.section`
  display: flex;
  flex-flow: column nowrap;
  height: 288px;
  margin: 0 46px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: ${colors.bgLight};
  border: none;
  border-radius: 5px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.4);
`;

const Box = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 16px 29px;
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.h2`
  margin: 0;
  font-family: SF Pro Display Thin;
  font-size: 35px;
  font-weight: 100;
  color: ${colors.textPrimary};
  text-align: left;
`;
const Counter = styled.h3`
  margin: 0;
  font-family: SF Pro Rounded Semibold;
  font-size: 50px;
  color: ${colors.textActiv};
  text-align: center;
`;
const Divider = styled.div`
  width: 200px;
  height: 1px;
  border-bottom: 1px solid ${colors.textButtons};
`;

const ProfileInfo = ({ counter }) => {
  return (
    <Card key={counter.id}>
      <Box>
        <Title>Sets</Title>
        <Counter>{counter.sets}</Counter>
      </Box>
      <Divider />
      <Box>
        <Title>Parts</Title>
        <Counter>{counter.parts}</Counter>
      </Box>
    </Card>
  );
};

ProfileInfo.propTypes = {
  counter: PropTypes.object,
};

export default ProfileInfo;
