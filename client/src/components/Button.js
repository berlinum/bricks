import styled from '@emotion/styled';
import colors from '../utils/colors';

const Button = styled.button`
  width: 280px;
  margin: 20px 20px;
  padding: 10px;
  background-color: ${colors.textActive};
  border: none;
  border-radius: 23px;
  font-family: 'SF Pro Text Bold';
  font-weight: 700;
  font-size: 22px;
  color: ${colors.textButtons};
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  &:focus {
    outline: none;
  }
`;

export default Button;
