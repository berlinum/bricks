import React from 'react';
import styled from '@emotion/styled';
import colors from '../../utils/colors';
import PropTypes from 'prop-types';

const SVG = styled.svg`
  width: 27px;
  height: 24px;
  stroke: ${colors.bgDanger};
  stroke-width: 1.5px;
  fill: ${(props) => (props.active ? colors.bgDanger : colors.bgLight)};
`;

const Favorite = ({ active }) => {
  return (
    <SVG
      active={active}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-1 -1 26 24"
    >
      <path
        d="M12,21.913C34.628,6.679,19.717-5.654,12,2.7,4.283-5.654-10.628,6.679,12,21.913Z"
        transform="translate(0 0)"
      />
    </SVG>
  );
};

Favorite.propTypes = {
  active: PropTypes.bool,
};

export default Favorite;
