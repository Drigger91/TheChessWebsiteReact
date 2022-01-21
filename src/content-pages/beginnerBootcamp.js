import React,{useEffect} from "react";
import {
  Heading,
  CourseContainer,
  HeroDiv,
  HomeLink,Img,
  CourseTagLine,
  CourseCard,
  CardContainer,
  Content,
  ContentHeading,
  ContentP,
} from "./coursesElements";
import {Img as Img2} from "../components/InfoSection/infoElements"
import Accordian from "../components/Accordian";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Beginner from "../components/Images/Begin.png";

const Bootcampbeginner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <CourseContainer>
        <Heading>
          <HomeLink to="/">TheChessWebsite</HomeLink> {">"}{" "}
          <Link id="CourseLink" to="/courses">
            Courses
          </Link>{" "}
          <br />
          <HeroDiv>
            <h2 id="h2">Beginner Bootcamp</h2> <br />
            <h5>The only course you'll need to start your journey.</h5>
          </HeroDiv>
        </Heading>
        <CardContainer>
          <CourseCard dark={false}>
            <Img src={Beginner}></Img>
            <Content>
              <ContentHeading>WHAT YOU'LL LEARN:</ContentHeading> <br />
              <ContentP>
                <ul id="CourseList">
                  <li>
                    Basic Chess Openings, Middlegames, and Endgame fundamentals.{" "}
                  </li>
                  <li>How to analyze chess games and learn from them.</li>
                  <li>The "GOLDEN CHECKLIST".</li>
                  <li>How to properly calculate and judge a good move.</li>
                  <li>Essential attacking ideas and techniques.</li>
                  <li>
                    The necessary skills to achieve your HIGHEST tactics rating
                  </li>
                  <li>
                    <b>And much more!</b>
                  </li>
                </ul>
              </ContentP>{" "}
              <br />
              <br />
              <Link id="CourseLink" to="/intermediate-bootcamp">
                <Button id="CourseButton" variant="contained">
                  Enroll Now
                </Button>
              </Link>{" "}
              <br />
              <br />
            </Content>
          </CourseCard>
          <CourseTagLine>
            LEARN EVERYTHING YOU NEED TO KNOW AS A BEGINNER
          </CourseTagLine>
          <CourseCard dark={true}>
            <Content>
              <ContentHeading>WHY THIS COURSE?</ContentHeading> <br />
              <ContentP>
                This course is designed for players who know the fundamentals of
                chess. They have an ELO rating somewhere in range of 800-1500.{" "}
                <br />
                <br /> These players are by no measure considered 'Beginners.'
                They beat the majority of their friends, and can usually
                differentiate a good move from a bad one. <br />
                <br /> In this course you'll learn everything you need to know
                to not only break your plateau and finally start improving
                again, but most importantly how to start thinking and playing
                like an intermediate level player.
                <br />
                <br />
                In ELO terms that means learning how to think and play up to the
                level of 1500. <br />
              </ContentP>{" "}
              <br />
              <br />
            </Content>
            <Img2>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_5rbrwc9n.json"
                background="transparent"
                speed=".5"
                loop
                autoplay
              ></lottie-player>
            </Img2>
          </CourseCard>
        </CardContainer>
        <Accordian />
      </CourseContainer>
    </>
  );
};

export default Bootcampbeginner;
