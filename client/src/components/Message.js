import styled from '@emotion/styled';
import colors from '../utils/colors';

const Message = styled.span`
  display: block;
  color: ${colors.textPrimary};
  font-family: SF Pro Display Regular;
  font-size: 18px;
  &:first-letter {
    text-transform: capitalize;
  }
`;
export default Message;
