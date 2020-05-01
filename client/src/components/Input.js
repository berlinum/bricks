import styled from '@emotion/styled';
import colors from '../utils/colors';

const Input = styled.input`
  margin: 10px 0;
  min-width: 280px;
  height: 46px;
  background-color: ${colors.bgLight};
  color: ${colors.textPrimary};
  border: none;
  border-radius: 5px;
  padding-left: 15px;
  text-align: left;
  font-size: 20px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  &:focus {
    outline: ${colors.systemAction};
    box-shadow: 0 0 3px 2px ${colors.systemAction};
  }
  &::placeholder {
    color: ${colors.textInfo};
  }
`;

export default Input;
