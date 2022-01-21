import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
import About from "./components/about/About";
import Resume from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Greeting from "./components/greeting/Greeting";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  const [Greetings, setGreetings] = useState(true);
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });
  //
  useEffect(() => {
    setTimeout(() => {
      setGreetings(false);
    }, 2000);
  }, []);
  return (
    <>
      {Greetings ? (
        <Greeting />
      ) : (
        <>
          <Navbar inView={inView} />
          <div
            ref={ref}
            style={{ backgroundColor: "rgb(200, 200, 200)", height: "1px" }}
          ></div>
          <Element name="Home">
            <Home />
          </Element>
          <Element name="About">
            <About />
          </Element>
          <Element name="Portfolio">
            <Portfolio />
          </Element>
          <Element name="Contact">
            <Resume />
          </Element>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
