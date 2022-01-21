import styled from "styled-components";
import { Link } from "react-router-dom";

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #f9f9f9;
  min-height: 80vh;
`;
export const Heading = styled.h1`
  color: #b8b6b6;
  padding: 1.5rem;
  padding-left: 6rem;
  // margin-bottom: 24px;
  font-size: 1.8rem;
  line-height: 1.1;
  font-weight: 600;
  background: black;
  width: 100%;
  height: 90px;
  text-align: left;

  @media screen and (max-width: 800px) {
    padding-left: 2rem;
    font-size: 1.5rem;
  }
  // &:hover{
  //   color:#aecfb4;
  // }
`;
export const HomeLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    // color: #aecfb4;
    cursor: pointer;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 2rem;
  @media screen and (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const Card = styled.div`
  display:flex;
  flex-direction:column;
  min-width: 31.2vw;
  max-width: 33vw;
  background: white;
  margin: 1rem;
  padding: 0.5rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 1050px) {
    min-width: 80vw;
  }
  @media screen and (max-width: 450px) {
    min-width: 80vw;
    height: max-content;
  }
`;
export const CardHeading = styled.h1`
  flex: 0.6;
  color: #01bf71;
  display:flex;
  font-size: 1.1rem;
  line-height: 26px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin:15px;
  margin-bottom: 20px;
  justify-content:center;
  text-align:center;
  align-items:center;
  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width:350px){
    font-size:.75rem;
  }
  @media screen and (max-width:320px){
    font-size:.65rem;
  }
  @media screen and (max-width:319px){
    flex:1;
  }
`;
export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.65;
`;
export const Cardp = styled.p`
  color: black;
  padding-bottom: 25px;
  text-align:left;
  padding-left:20px;
  padding-right:3px;
`;
export const CardImg = styled.img`
  flex: 0.35;
  max-width:70%
  height: 60%;
  max-height:180px;
  max-width:130px;
  margin:15px;
  @media screen and (max-width:850px){
    width:85%;
    height:60%
  }
  @media screen and (max-width:319px){
    display:none;
  }
`;
export const CardDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0.35;
  justify-content: space-between;
  padding-bottom: 1rem;
`;
export const ButtonDiv = styled.div`
  flex: 0.3;
  align-items: center;
`;
export const CardText = styled.div`
  flex: 0.7;
`;
