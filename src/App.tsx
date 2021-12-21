import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Element, Link } from "react-scroll";
import About from "./components/about/About";
import Greeting from "./components/greeting/Greeting";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";

function App() {
  const [Greetings, setGreetings] = useState(true);
  const [NavbarBg, setNavbarBg] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setGreetings(false);
    }, 2000);
  }, []);
  return (
    <div>
      {Greetings ? (
        <Greeting />
      ) : (
        <>
          <Navbar />
          <Element name="Home">
            <Home />
          </Element>
          <div
            style={{ backgroundColor: "rgb(124, 124, 124)", height: "1em" }}
          ></div>
          <Element name="About">
            <About />
          </Element>
          <Element name="Portfolio">
            <Portfolio />
          </Element>
          <Element name="Resume">
            <Resume />
          </Element>
        </>
      )}
    </div>
  );
}

export default App;
