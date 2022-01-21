import React, { useEffect } from "react";
import {
  CourseContainer,
  CardContainer,
  Heading,
  HomeLink,
  HeroDiv,
  CourseCard,
  Img,
  Content,
  ContentHeading,
  ContentP,
} from "./coursesElements";
import Intermediate from "../components/Images/Intermediate.jpg";
import Beginner from "../components/Images/Beginner.jpg";
import Opening from "../components/Images/openings.jpg";
import { Button } from "@mui/material";
import {Link} from 'react-router-dom';
const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <CourseContainer>
        <Heading>
          <HomeLink to="/">TheChessWebsite</HomeLink> {">"} Courses <br />
          <HeroDiv>
            <h2 id="h2">COURSES</h2> <br />
            <h5 id="h5">
              Formidable Ideas and exciting stuff for all kinds of players.
            </h5>
          </HeroDiv>
        </Heading>
        <CardContainer>
          <CourseCard dark={false}>
            <Img src={Intermediate}></Img>
            <Content>
              <ContentHeading>
                Learn how to take your basics to the next level in openings,
                middlegames, tactics, strategy, and endgames.
              </ContentHeading>{" "}
              <br />
              <ContentP>
                If you're ready to build on the beginner fundamentals of chess,
                this course is for you. <br />
                <br /> We designed this course for players with a rating roughly
                between 800 and 1600. <br />
                <br /> Enroll now and get ready to skyrocket your skills.
              </ContentP>{" "}
              <br />
              <br />
              <Link id='CourseLink' to='/intermediate-bootcamp'><Button id="CourseButton" variant="contained">
                Learn More
              </Button></Link>{" "}
              <br /><br/>
            </Content>
          </CourseCard>
          <CourseCard dark={true}>
            <Img src={Beginner}></Img>
            <Content>
              <ContentHeading>
                Learn chess fundamentals that will have you crushing your
                opponents in no time.
              </ContentHeading>{" "}
              <br />
              <ContentP>
                If you want to learn how to play chess, or have little
                experience in the game and are struggling to improve then this
                course is for you! <br />
                <br />
                It will arm you with all the fundamentals in all 3 stages of the
                game: opening, middlegame, and endgame. <br />
                <br />
                More importantly it will accelerate your learning process by
                teaching you how to avoid common mistakes. <br />
                <br /> Enroll now and start winning games today!.
              </ContentP>{" "}
              <br />
              <br />
              <Link id='CourseLink' to='/beginner-bootcamp'><Button id="CourseButton" variant="contained">
                Learn More
              </Button></Link>{" "}
              <br /><br/>
            </Content>
          </CourseCard>
          <CourseCard dark={false}>
            <Img src={Opening}></Img> <br/>
            <Content>
              <ContentHeading>
                Learn openings that will drastically make you a stronger player
              </ContentHeading>{" "}
              <br />
              <ContentP>
                Studying openings is practically like studying how to gain an
                advantage very early on in the game. <br />
                <br /> Enroll in an openings course and take your skills to a
                whole new level. <br />
                <br /> Courses include:<br/><br/>
                Caro-Kann (Basics-Intermediate) <br/>
                E4 (Basics-Intermediate) <br/>
                Sicilian (Basics-Intermediate) <br/>
                London (Basics-Intermediate) <br/>
              </ContentP>{" "}
              <br />
              <br />
              <Link id='CourseLink' to='/openings'><Button id="CourseButton" variant="contained">
                Learn More
              </Button></Link>{" "}
              <br /> <br/>
            </Content>
          </CourseCard>
        </CardContainer>
      </CourseContainer>
    </div>
  );
};

export default Courses;
