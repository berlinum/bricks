/* eslint-disable react/no-unknown-property */
import React from 'react';
import styled from '@emotion/styled';

const SVG = styled.svg`
  width: 100px;
  height: 100px;
`;

export const Loading = () => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <circle
      cx="50"
      cy="50"
      r="32"
      stroke-width="8"
      stroke="#1d1d1b"
      stroke-dasharray="50.26548245743669 50.26548245743669"
      fill="none"
      stroke-linecap="round"
      transform="rotate(5.99292 50 50)"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        dur="1s"
        repeatCount="indefinite"
        keyTimes="0;1"
        values="0 50 50;360 50 50"
      ></animateTransform>
    </circle>
    <circle
      cx="50"
      cy="50"
      r="23"
      stroke-width="8"
      stroke="#ffae00"
      stroke-dasharray="36.12831551628262 36.12831551628262"
      stroke-dashoffset="36.12831551628262"
      fill="none"
      stroke-linecap="round"
      transform="rotate(-5.99292 50 50)"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        dur="1s"
        repeatCount="indefinite"
        keyTimes="0;1"
        values="0 50 50;-360 50 50"
      ></animateTransform>
    </circle>
  </SVG>
);
