import React, { useState } from "react";
import {
  HeroBg,
  VideoBg,
  HeroContainer,
  HeroBtnWrapper,
  HeroContent,
  HeroHeading,
  HeroP,
  ArrowForward,
  ArrowRight,
} from "./heroElements";
import { Button } from "../ButtonElement";
import video from "../Video_bg/video2.mp4";
const Hero = () => {
  const [hover, sethover] = useState(false);
  const onHover = () => {
    sethover(!hover);
  };
  return (
    <>
      <HeroContainer id="hero">
        <HeroBg>
          <VideoBg autoPlay loop muted src={video} type="video/mp4"></VideoBg>
        </HeroBg>
        <HeroContent>
          <HeroHeading>
            Stuck at chess?
            <br />
            Learn and Grow with TheChessWebsite!
          </HeroHeading>
          <HeroP>We have sloutions to all your problems.</HeroP>
          <HeroBtnWrapper>
            <Button
              to="/signin"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Hero;
