import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Courses from "./content-pages/courses";
import Home from "./pages";
import News from "./content-pages/news";
import { dark } from "@mui/material/styles/createPalette";
import Bootcampbeginner from "./content-pages/beginnerBootcamp";
import Bootcampinter from "./content-pages/interBootcamp";
import Openings from "./content-pages/openings";
import Accordian from "./components/Accordian";
import SignIn from "./components/SignIn";
import Error404 from "./content-pages/error404";
import SignUp from "./components/SignUp";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/beginner-bootcamp" element={<Bootcampbeginner />}></Route>
        <Route
          path="/intermediate-bootcamp"
          element={<Bootcampinter />}
        ></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/openings" element={<Openings />}></Route>
        <Route path="*" element={<Error404/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
