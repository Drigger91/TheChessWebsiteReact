import styled from "styled-components";
import { Link } from "react-router-dom";

export const CourseContainer = styled.div`
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
  min-height: 90px;
  text-align: left;

  @media screen and (max-width: 800px) {
    padding-left: 2rem;
    font-size: 1.5rem;
  }
`;
export const HomeLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    // color: #aecfb4;
    cursor: pointer;
  }
`;
export const HeroDiv = styled.div`
  display: flex;
  color: white;
  width: 100%;
  justify-content: center;
  text-align: center;
  padding-top: 2rem;
  flex-direction: column;
  padding-bottom: 2rem;
  padding-right: 1rem;
  @media screen and (max-width: 800px) {
    font-size: 1.5rem;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 0.5rem;
  align-items: center;
`;
export const CourseCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  color: ${({ dark }) => (dark ? "white" : "black")};
  background-color: ${({ dark }) => (dark ? "black" : "")};
  min-height: 75vh;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 750px) {
    width: 100vw;
    flex-direction: column;
  }
`;
export const Img = styled.img`
  flex: 0.25;
  align-items: center;
  width: 30%;
  height: 50%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-right: 20px;
  @media screen and (max-width: 750px) {
    width: 70%;
    height: 70%;
  }
  padding-right: 20px;
`;
export const Content = styled.div`
  flex: 0.4;
  padding-right: 1rem;
  width: 60%;
  text-align: left;
  @media screen and (max-width: 800px) {
    flex: 0.65;
    width: 90%;
  }
`;
export const ContentHeading = styled.h3`
  font-size: 1.9rem;
  @media screen and (max-width: 1150px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 750px) {
    font-size: 1.2rem;
  }
`;
export const ContentP = styled.p`
  font-size: 1.2rem;
  @media screen and (max-width: 1150px) {
    font-size: 0.95rem;
  }
  @media screen and (max-width: 750px) {
    font-size: 0.82rem;
  }
`;
export const CourseTagLine = styled.div`
  width: 100%;
  background-color: #000;
  font-size: 2.2rem;
  font-weight: 800;
  color: white;
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
  text-align: center;
  @media screen and (max-width: 800px) {
    font-size: 1.2rem;
  }
`;
export const OpeningContainer = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ dark }) => (dark ? "black" : "white")};
`;
export const OpeningCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  color: ${({ dark }) => (dark ? "white" : "black")};
  background-color: ${({ dark }) => (dark ? "black" : "")};
  min-height: 55vh;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 750px) {
    width: 100vw;
    flex-direction: column;
  }
`;
export const OpeningImg = styled.img`
  flex: 0.15;
  align-items: center;
  width: 30%;
  height: 50%;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 120px;
  @media screen and (max-width: 750px) {
    padding-top:12px;
    padding-bottom:12px;
    margin:0;
    width: 70%;
    height: 70%;
  }
  padding-right: 20px;
`;