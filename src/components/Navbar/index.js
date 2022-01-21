import React from "react";
import {FaBars} from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from "./navElements";
const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">TheChessWebsite</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" smooth={true} duration={500} spy={true} exact="true">Courses</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover" smooth={true} duration={500} spy={true} exact="true">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services" smooth={true} duration={500} spy={true} exact="true">Memberships</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup" smooth={true} duration={500} spy={true} exact="true">Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
