import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Element, Link } from "react-scroll";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
 

function App() {
  return (
    <div>
      <Navbar />
      <Element name="Home">
        <Home />
      </Element>
      <Element name="About">
        <About />
      </Element>
      <Element name="Portfolio">
        <Portfolio />
      </Element>
      <Element name="Resume">
        <Resume />
      </Element>
    </div>
  );
}

export default App;
