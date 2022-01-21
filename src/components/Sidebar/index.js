import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarLink,
  SidebarRoute,
  SidebarWrapper,
  SidebarMenu,
} from "./sidebarElemnts";
const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" smooth={true} duration={650} spy={true} exact="true" onClick={toggle}>Courses</SidebarLink>
          <SidebarLink to="discover" smooth={true} duration={650} spy={true} exact="true" onClick={toggle}>Discover</SidebarLink>
          <SidebarLink to="services" smooth={true} duration={650} spy={true} exact="true" onClick={toggle}>Memberships</SidebarLink>
          <SidebarLink to="signup" smooth={true} duration={650} spy={true} exact="true" onClick={toggle}>Contact Us</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
