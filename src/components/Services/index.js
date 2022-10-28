import React from "react";
import {
  ServiceContainer,
  ServiceWrapper,
  Serviceh1,
  TopLine,
  CardWrapper,
  Card,
  CardAnimation,
  CardHeading,
  Button,
  Cardul,
  Cardli,
} from "./serviceElements";
import Modal from "../Modal";
const Services = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <ServiceContainer id="services">
        <ServiceWrapper>
          <TopLine>Liked our content, Support TheChessWebsite</TopLine>
          <Serviceh1>Our Memberships</Serviceh1>
          <CardWrapper>
            <Card>
              <CardAnimation>
                <lottie-player
                  src="https://assets5.lottiefiles.com/packages/lf20_ZCjq5s.json"
                  background="transparent"
                  speed=".5"
                  loop
                  autoplay
                ></lottie-player>
              </CardAnimation>
              <CardHeading>Diamond</CardHeading>
              <div>
                <Cardul>
                  <Cardli>Unlimited game review</Cardli>
                  <Cardli>Get insights of all games</Cardli>
                  <Cardli>
                    Get extra <b>25%</b> off on courses
                  </Cardli>
                  <Cardli>
                    <b>No Ads</b>
                  </Cardli>
                </Cardul>
              </div>{" "}
              <br />
              <Button onClick={()=>handleOpen()}>Buy Now!</Button>
              <Modal handleClose={handleClose}  open={open} name={'Diamond'}/>
            </Card>
            <Card>
              <CardAnimation>
                <lottie-player
                  src="https://assets8.lottiefiles.com/packages/lf20_ufo1fydo.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </CardAnimation>
              <CardHeading>Platinum</CardHeading>
              <div>
                <Cardul>
                  <Cardli>Unlimited Game review</Cardli>
                  <Cardli>Get insights of 10 games</Cardli>
                  <Cardli>Get extra <b>15%</b> off on courses</Cardli>
                  <Cardli>
                    <b>No Ads</b>
                  </Cardli>
                </Cardul>
              </div>
              <br />
              <Button onClick={()=>handleOpen()}>Buy Now!</Button>
              <Modal handleClose={handleClose}  open={open}/>
            </Card>
            <Card>
              <CardAnimation>
                <lottie-player
                  src="https://assets8.lottiefiles.com/packages/lf20_rZQs81.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </CardAnimation>
              <CardHeading>Gold</CardHeading>
              <div>
                <Cardul>
                  <Cardli>Unlimited game review</Cardli>
                  <Cardli>Get insights of 5 games</Cardli>
                  <Cardli>
                    Get extra <b>10%</b> off on courses
                  </Cardli>
                  <Cardli>
                    <b>No Ads</b>
                  </Cardli>
                </Cardul>
              </div>{" "}
              <br />
              <Button onClick={()=>handleOpen()}>Buy Now!</Button>
              <Modal handleClose={handleClose}  open={open}/>
            </Card>
          </CardWrapper>
        </ServiceWrapper>
      </ServiceContainer>
    </>
  );
};

export default Services;
