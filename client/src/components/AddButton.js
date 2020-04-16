import styled from '@emotion/styled';
import Plus from '../assets/icons/whitePlus.svg';
import colors from '../utils/colors';

export const AddButton = styled.button`
  width: 70px;
  height: 70px;
  border: none;
  border-radius: 50%;
  background-color: ${colors.systemAction};
  background-image: url(${Plus});
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  &:focus {
    outline: none;
    transform: rotate(45deg);
    transition: 0.5s;
  }
  &:active {
    transform: rotate(45deg);
    transition: 0.5s;
  }
`;
