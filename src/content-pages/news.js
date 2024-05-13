import React, { useState, useEffect } from "react";
import { useGetNewsQuery } from "../Redux/GetNews";
import moment from "moment";
import {
  Heading,
  NewsContainer,
  HomeLink,
  CardContainer,
  Card,
  CardHeading,
  CardImg,
  Cardp,
  CardDiv,
  ButtonDiv,
  CardBody,
  CardText,
} from "./newsElements";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = useGetNewsQuery({
    newsCategory: "Chess",
    count: 15,
  });
   console.log(data);
  if (!data?.value) {
    return (
      <>
      <Heading>
          <HomeLink to="/">TheChessWebsite</HomeLink> {">"} News
        </Heading>
      <Box id='loader' sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    </>
      // <Spinner id="loader" animation="border" role="status">
      //   <span className="visually-hidden">Loading...</span>
      // </Spinner>
    );
  }
  return (
    <>
      <NewsContainer>
        <Heading>
          <HomeLink to="/">TheChessWebsite</HomeLink> {">"} News
        </Heading>
        <CardContainer>
          {data?.value.map((news, index) => {
            return (
              <Card key={index}>
                <CardDiv>
                  <CardHeading>{news.name}</CardHeading>
                  <CardImg
                    src={news?.image?.thumbnail?.contentUrl}
                    alt="news"
                  />
                </CardDiv>
                <CardBody>
                  <CardText>
                    <Cardp>
                      {news.description.length > 200
                        ? `${news.description.substring(0, 200)}....`
                        : news.description}
                    </Cardp>
                    <div className="published">
                      <p>
                        {" "}
                        Published{" "}
                        {moment(news.datePublished).startOf("ss").fromNow()}
                      </p>
                    </div>
                  </CardText>

                  <ButtonDiv>
                    {" "}
                    <button className="button">
                      <a id="anchor" href={news.url} target="_blank">
                        View Article
                      </a>
                    </button>
                  </ButtonDiv>
                </CardBody>
              </Card>
            );
          })}
        </CardContainer>
      </NewsContainer>
    </>
  );
};

export default News;
