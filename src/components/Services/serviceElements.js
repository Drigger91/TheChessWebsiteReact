import styled from "styled-components";
import { Link } from "react-router-dom";
export const ServiceContainer = styled.div`
  color: #fff;
  background: #f9f9f9;
  @media screen and (max-width: 900px) {
    padding: 80px 0;
  }
`;
export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  min-height: 100vh;
  width: 100%;
  max-width: 95vw;
  margin-right: auto;
  padding: 0 24px;
  justify-content: center;
`;
export const Serviceh1 = styled.h1`
  color: black;
`;
export const TopLine = styled.p`
  color: #01bf71;
  font-size: 1.1rem;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  padding-bottom: 16px;
`;
export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 900px) {
    justify-content: center;
    align-items: center;
    flex-direction: column !important;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  color: black;
  width: 19vw;
  max-height: 600px;
  min-height: 350px;
  padding: 1.5rem;
  margin: 1rem;
  @media screen and (max-width: 900px) {
    width: 50% !important;
    // margin-right:2rem;
    margin-left: 2.5rem;
  }
  @media screen and (max-width: 500px) {
    width: 80% !important;
    // margin-right:2rem;
    margin-left: 2.5rem;
  }
`;
export const CardAnimation = styled.div`
  padding: 0.1rem;
  justify-content: center;
  align-items: center;
  height: 30%;
  width: 80%;
  @media screen and (max-width: 800px) {
    height: 60%;
  }
`;
export const CardHeading = styled.h3`
  color: #01bf71;
  padding: 18px;
  text-transform: uppercase;
`;
export const Button = styled.button`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 14px 48px;
  color: #d9fafa;
  font-size: 14px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  position: relative;
  /* margin-left:1.9rem; */
  bottom: 0;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #069c5e;
  }
`;
export const Cardul = styled.ul`
  list-style-type: none;
  text-decoration: none;
`;
export const Cardli = styled.li`
  padding: 0.5rem;
`;
