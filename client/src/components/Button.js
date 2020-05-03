import styled from '@emotion/styled';
import colors from '../utils/colors';

const Button = styled.button`
  width: 280px;
  height: 46px;
  margin: 20px 20px;
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
    /* box-shadow: 0 0 3px 2px ${colors.systemAction}; */
  }
`;

export default Button;
