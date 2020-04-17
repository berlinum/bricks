import { keyframes } from '@emotion/core';

export const bounceDown = keyframes`
  0% {
    transform: translateY(-500px);
    opacity: 0;
  }
  10% {
    transform: translateY(0);
    opacity: 1;
  }
  17% {
    transform: translateY(-100px);
  }
  30%{
    transform: translateY(0);
    opacity: 1;
  }
  40% {
    transform: translateY(-35px);
  }
  55%{
    transform: translateY(0);
    opacity: 1;
  }
  65% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(-150px);
    opacity: 1;
  }
`;

export const bounceUp = keyframes`
  0% {
    transform: translateY(500px);
    opacity: 0;
  }
  10% {
    transform: translateY(0);
    opacity: 1;
  }
  17% {
    transform: translateY(100px);
  }
  30% {
    transform: translateY(0);
    opacity: 1;
  }
  40% {
    transform: translateY(35px);
  }
  55% {
    transform: translateY(0);
    opacity: 1;
  }
  65% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(-100px);
    opacity: 1;
  }
`;

export const display = keyframes`
  0% {opacity: 0};
  100% {opacity: 1};
`;
