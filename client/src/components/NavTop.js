import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import colors from '../utils/colors';

const Container = styled.ul`
  display: flex;
  height: 46px;
  width: 100vw;
  justify-content: center;
  margin: 0;
  padding: 0;
  background: ${colors.textActiv};
`;

const NavItem = styled.button`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  min-width: 158px;
  max-width: 200px;
  margin: 8px 0;
  border: none;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
  font-family: 'SF Pro Display Semibold';
  font-size: 16px;
  color: ${(props) => (props.active ? colors.bgDark : colors.bgWhite)};
  background-color: ${(props) =>
    props.active ? colors.bgLight : colors.textActiv};
`;

const NavTop = ({ links, value, onTabClick }) => {
  return (
    <Container>
      {links.map((link) => (
        <NavItem
          key={link.label}
          active={value === link.label}
          onClick={() => onTabClick(link.label)}
        >
          <span>{link.label}</span>
        </NavItem>
      ))}
    </Container>
  );
};

NavTop.propTypes = {
  links: PropTypes.array,
  value: PropTypes.string,
  onTabClick: PropTypes.func,
};

export default NavTop;
