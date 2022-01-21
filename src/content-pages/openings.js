import React, { useEffect } from "react";
import {
  Heading,
  CourseContainer,
  HeroDiv,
  HomeLink,
  Img,
  CourseTagLine,
  CourseCard,
  CardContainer,
  Content,
  ContentHeading,
  ContentP,
  OpeningContainer,
  OpeningCard,
  OpeningImg,
} from "./coursesElements";
import Caro from "../components/Images/Caro.png";
import Sicilian from "../components/Images/sicilian.png";
import Accordian from "../components/Accordian";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Open from "../components/Images/Open.png";
import London from "../components/Images/London.png";
import E4 from "../components/Images/E4.png";
const Openings = () => {
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
            <h2 id="h2">OPENINGS</h2> <br />
            <h5>Learn the most important element of a ChessGame.</h5>
          </HeroDiv>
        </Heading>
        <CardContainer>
          <CourseCard dark={false}>
            <Content>
              <ContentHeading>WHY LEARN OPENINGS?</ContentHeading> <br />
              <ContentP>
                If you have any desire to become better at chess and finally
                break your plateau then it's time to learn chess openings.{" "}
                <br />
                <br /> Believe it or not but the lack of a solid openings
                repertoire is probably what's keeping you from evolving as a
                chess player. You see, when studying openings you're basically
                studying how to gain an advantage very early on in the game.{" "}
                <br />
                <br /> By not having a sound understanding of openings you're
                basically giving your opponents all the advantage. And it's
                probably why you keep falling into their traps.
                <br />
                <br />
                Once you learn a few openings a whole new world of fun opens up.
                You'll find yourself in greater control of the game, and you'll
                quickly start crushing your opponents. <br />
              </ContentP>{" "}
              <br />
              <br />
            </Content>
            <Img src={Open} />
          </CourseCard>
          <CourseTagLine>
            LEARN OPENINGS THAT WILL ELEVATE YOUR PLAY AND
            <br /> HELP YOU CRUSH YOUR OPPONENTS{" "}
          </CourseTagLine>
        </CardContainer>
        <OpeningContainer dark={false}>
          {" "}
          <br />
          <h1>Openings For White</h1>
          <br /> <br />
          <OpeningCard dark={false}>
            <OpeningImg src={London} />
            <Content>
              <ContentHeading>The London System</ContentHeading> <br />
              <ContentP>
                The London System is a chess opening that usually arises after
                1.d4 and 2.Bf4, or 1.d4, 2.Nf3 and 3.Bf4. It is a "system"
                opening that can be used against virtually any black defense and
                thus comprises a smaller body of opening theory than many other
                openings. <br />
                <br /> The idea behind the London System is: White defines a
                scheme for development and sticks to it, virtually regardless of
                what Black plays. This means that theory is not as important in
                a “system” opening like this one, and that the ideas do not vary
                much from one variation to the other. <br />
                <br />
              </ContentP>{" "}
              <br />
              <br />
              <Button variant="contained">Buy The London Bundle</Button>
            </Content>
          </OpeningCard>
          <OpeningCard dark={false}>
            <OpeningImg src={E4} />
            <Content>
              <ContentHeading>The Bold E4!!</ContentHeading> <br />
              <ContentP>
                1.e4, which is the most popular opening move and has many
                strengths—it immediately stakes a claim in the center, and frees
                two pieces (the queen and king's bishop) for action. The oldest
                openings in chess follow <br />
                <br /> Learn the basic ideas and openings with 1.E4!.Get to know
                the familiar poistions arise from the opening giving you one
                edge ahead of your opponents. <br />
                <br />
              </ContentP>{" "}
              <br />
              <br />
              <Button variant="contained">Buy The E4 Bundle</Button>
            </Content>
          </OpeningCard>   <br/><br/>
        </OpeningContainer>
        <OpeningContainer dark={true}>
          {" "}
          <br />
          <h1 id="white">Openings For Black</h1> <br /> <br />
          <OpeningCard dark={true}>
            <OpeningImg src={Caro} />
            <Content>
              <ContentHeading>The Mighty Caro–Kann</ContentHeading> <br />
              <ContentP>
                The Caro–Kann Defence is a chess opening characterised by the
                moves: 1. e4 c6.The Caro–Kann is a common defence against the
                King's Pawn Opening and is classified as a "Semi-Open Game" like
                the Sicilian Defence and French Defence, <br />
                <br /> As for Caro Kann, some people say that it is better to
                get to know open positions first, but you can certainly play it
                if you like it. You're welcome. If you need anything else, don't
                hesitate to ask.Yes, it considered to be more solid than the
                Sicilian. People who want to play sharp, fighting positions
                usually go for the Sicilian as Black. However, it is riskier, as
                White has the natural advantage of the first move. In Caro-Kann,
                Black aims to equalize first, and then fight for the initiative.{" "}
                <br />
                <br />
              </ContentP>{" "}
              <br />
              <br />
              <Button variant="contained">Buy The Caro Bundle</Button>
            </Content>
          </OpeningCard>
          <OpeningCard dark={true}>
            <OpeningImg src={Sicilian} />
            <Content>
              <ContentHeading>The Strong Sicilian!!</ContentHeading> <br />
              <ContentP>
                The Sicilian Defence is a chess opening that begins with the
                following moves: 1. e4 c5 The Sicilian is the most popular and
                best-scoring response to White's first move 1.e4. <br />
                <br />
                The Sicilian Defense is the most popular defense against white's
                opening 1. e4 and is used extensively at top level play. It is a
                very aggressive defense and immediately stakes claim at the
                center, denying white the double pawns on e4 and d4. <br />
                <br />
              </ContentP>{" "}
              <br />
              <br />
              <Button variant="contained">Buy The Sicilian Bundle</Button>
              
            </Content>
          </OpeningCard>
          <br/><br/>
        </OpeningContainer>
     
        <Accordian />
      </CourseContainer>
    </>
  );
};

export default Openings;
