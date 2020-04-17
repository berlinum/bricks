import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import colors from '../utils/colors';

const Nav = styled.ul`
  display: flex;
  height: 83px;
  width: 100vw;
  list-style: none;
  justify-content: center;
  margin: 0;
  padding: 0;
  background: ${colors.bgLight};
`;

const NavItem = styled.li`
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  justify-content: center;
  align-items: center;
  min-width: 93px;
  max-width: 120px;
  padding: 6px 12px 8px;
  cursor: pointer;
  font-family: 'SF Pro Display Medium';
  font-size: 12px;
  color: ${(props) => (props.active ? colors.textActiv : colors.textInactiv)};
`;

const Label = styled.span`
  margin-top: 4px;
`;

const NavBottom = ({ links, value, onTabClick }) => {
  return (
    <Nav>
      {links.map((link) => (
        <NavItem
          key={link.label}
          active={value === link.label}
          onClick={() => onTabClick(link.label)}
        >
          <link.Icon active={value === link.label} />
          <Label>{link.label}</Label>
        </NavItem>
      ))}
    </Nav>
  );
};

NavBottom.propTypes = {
  links: PropTypes.array,
  value: PropTypes.string,
  onTabClick: PropTypes.func,
};

export default NavBottom;
