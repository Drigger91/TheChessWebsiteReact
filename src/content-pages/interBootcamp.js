import React,{useEffect} from "react";
import {
  Heading,
  CourseContainer,
  HeroDiv,
  HomeLink,
  CourseTagLine,
  CourseCard,
  CardContainer,
  Img,
  Content,
  ContentHeading,
  ContentP,
} from "./coursesElements";
import Accordian from "../components/Accordian"
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Intermediate from "../components/Images/Inter.png";
import Trophy from "../components/Images/Trophy.png"
const Bootcampinter = () => {
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
            <h2 id="h2">Intermediate Bootcamp</h2> <br />
            <h5>The only course you'll need to enhance your skills.</h5>
          </HeroDiv>
        </Heading>
        <CardContainer>
          <CourseCard dark={false}>
            <Img src={Intermediate}></Img>
            <Content>
              <ContentHeading>WHAT YOU'LL LEARN:</ContentHeading> <br />
              <ContentP>
                <ul id="CourseList">
                  <li>
                    How to study and choose major openings for White and Black
                  </li>
                  <li>Most common pawn structures and the plans associated</li>
                  <li>
                    Using your pieces to their maximum and trading them
                    correctly
                  </li>
                  <li>
                    Creating and defending against attacks on all 3 sides of the
                    board
                  </li>
                  <li>
                    Navigating practical endgames with different imbalances
                  </li>
                  <li>
                    The necessary skills to achieve your HIGHEST tactics rating
                  </li>
                  <li>4 Full Games played and Analyzed</li>
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
            LEARN THE IDEAS THAT SEPARATE A GOOD PLAYER <br /> FROM A GREAT ONE{" "}
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
                like an intermediate level player.<br/><br/>In ELO terms that means learning how to think and play up to the level of 1500. <br/>
              </ContentP>{" "}
              <br />
              <br />
            </Content>
            <Img src={Trophy}></Img>
          </CourseCard>
        </CardContainer>
        <Accordian/>
      </CourseContainer>
    </>
  );
};

export default Bootcampinter;
