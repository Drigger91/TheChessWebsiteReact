import React from "react";
import { Button } from "../Button2";
import img from "../Images/svg3.svg"
import {
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  TopLine,
  Subtitle,
  BtnWrap,
  Img,
  ImgWrap,
} from "./infoElements";
const Info = ({
  lightBg,
  id,
  imgStart,
  headLine,
  description,
  buttonLabel,
  darkText,
  topLine,
  animation,
  to,
  lightText
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button primary="primary" color="dark" to={to}>{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
              <Img><lottie-player src={animation}  background="transparent"  speed="1"    loop  autoplay></lottie-player></Img>
                
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Info;
