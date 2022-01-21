import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  
  height: 80px;
  margin-top:-50px;
  display: flex;
  background:black;
  justify-content: center;
  align-items: center;
  font-size: .91rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 850px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1150px;
`;
export const NavLogo = styled(LinkR)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.82rem;
  display: flex;
  align-items: center;
  margin-left: 0px;
  font-weight: bolder;
  text-decoration: none;
  @media screen and (max-width:480px){
    font-size: 1.2rem !important;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
    position: absolute;
    top: 0;
    transform: translate(-100%, 60%);
    right: 0;
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -20px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinks = styled(LinkS)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  
&:hover{
  cursor: pointer;
  color:#aecfb4;
  transition:0.3s ease-out;
  // border-bottom: 3px solid #01bf71;
}
  &:active {
    border-bottom: 3px solid #01bf71;
  }
`;
export const NavBtn = styled.nav`
display:flex;
align-items:center;


@media screen and (max-width:800px){
    display:none;
}
`

export const NavBtnLink = styled(LinkR)`
border-radius:50px;
background:#01bf71;
white-space : nowrap;
padding : 10px 22px;
color:#010606;
font-size:16px;
border:none;
cursor:pointer;
transition: all 0.2s ease-in-out;
text-decoration : none;
&:hover{
    transition: all 0.4s ease-in-out;
    background:whitesmoke;
    color: #010606;
}
`