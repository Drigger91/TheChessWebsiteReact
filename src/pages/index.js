import React, { useState } from "react";
import  Hero  from "../components/HeroSection";
import Info from "../components/InfoSection";
import { homeObjectOne,homeObjectTwo} from "../components/InfoSection/data";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero/>
      <Info {...homeObjectOne}/>
      <Info {...homeObjectTwo}/>
      <Services/>
    </>
  );
};

export default Home;
