import React, { useState, useContext } from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { HamburgerSpin } from "react-animated-burgers";
import Context from "../../contexts/Context";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.color.leading};
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  @media (max-width: 575.98px) {
    flex-direction: column;
  }
  @media (min-width: 576px) {
    display: flex;
  }

  ${({ isActive }) =>
    !isActive &&
    css`
      display: none;
    `}
`;

const NavItem = styled.li`
  list-style: none;
  margin: 15px 30px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.light};
  opacity: 1;
  :hover {
    text-decoration: none;
    color: ${({ theme }) => theme.color.light};
    opacity: 0.5;
  }
`;

const StyledHamburgerSpin = styled(HamburgerSpin)`
  outline: none !important;
  @media (min-width: 576px) {
    display: none;
  }
`;

const Navbar = () => {
  const value = useContext(Context);
  const { clearHomeInterval } = value;

  const [isActive, setIsActive] = useState(false);

  return (
    <Nav>
      <StyledHamburgerSpin
        isActive={isActive}
        onClick={() => setIsActive(!isActive)}
        barColor="#ffffff"
      />
      <NavList isActive={isActive} className={isActive ? "active" : null}>
        <NavItem>
          <StyledNavLink onClick={clearHomeInterval} to="/">
            Start
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink onClick={clearHomeInterval} to="/AboutMe">
            O mnie
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink onClick={clearHomeInterval} to="/MyProjects">
            Projekty
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink onClick={clearHomeInterval} to="/ContactMe">
            Kontakt
          </StyledNavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
