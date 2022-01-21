import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background: black;
  display: flex;
  justify-content:center;
  flex-direction:row;
  width: 100%;
  @media screen and (max-width: 800px) {
    justify-content:center;
  }
`;
export const FooterWrap = styled.div`
  padding-top: 48px;
  display: flex;
  flex-direction: row;
//   margin: auto;
  justify-content: center;
  align-items: center;
  width: 100%;
  
`;
export const FooterLinksContainer = styled.div`
  display: flex;
  width:90%;
  justify-content: space-around;
  @media screen and (max-width: 800px) {
    padding-top: 32px;
    justify-content:center!important;
  }
`;
export const FooterLinksWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content:center !important;
  }
`;
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  box-sizing: border-box;
  color: #fff;
  padding:2rem;
  @media screen and (max-width: 800px) {
    align-items:left;
    justify-content:center;
  }
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;
export const FooterLinkTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 25px;
`;
export const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: .95rem;
  &:hover {
    color: #aecfb4;
    transition: 0.3s ease-out;
  }
`;
