import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import colors from '../utils/colors';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  flex: 0 0 75px;
  width: 100%;
  list-style: none;
  justify-content: center;
  margin: 0;
  padding: 0;
  background: ${colors.bgLight};
  border-top: 1px solid rgba(116, 116, 116, 0.2);
`;

const NavItem = styled(NavLink)`
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  min-width: 63px;
  max-width: 120px;
  padding: 6px 12px 8px;
  cursor: pointer;
  font-family: 'SF Pro Display Medium';
  font-size: 12px;
  color: ${(props) => (props.active ? colors.textActive : colors.textInactive)};
`;

const Label = styled.span`
  margin-top: 4px;
`;

const NavBottom = ({ links, value, onTabClick }) => {
  return (
    <Nav>
      {links.map((link) => (
        <NavItem
          to={link.navLink}
          key={link.label}
          active={value.toString(value === link.label)}
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
