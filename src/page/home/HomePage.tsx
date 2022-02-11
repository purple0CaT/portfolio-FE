import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
import About from "../../components/about/About";
import Portfolio from "../../components/portfolio/Portfolio";
import Contact from "../../components/contact/Contact";
import Home from "../../components/home/Home";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import Greeting from "../../components/greeting/Greeting";

function HomePage() {
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });
  const [Greetings, setGreetings] = useState(true);
  //
  useEffect(() => {
    setTimeout(() => {
      setGreetings(false);
    }, 2000);
  }, []);
  return (
    <>
      {Greetings && <Greeting />}
      <div
        className="position-relative"
        style={{
          height: Greetings ? "100vh" : "unset",
          overflow: Greetings ? "hidden" : "unset",
        }}
      >
        <div
          ref={ref}
          style={{
            backgroundColor: "rgb(200, 200, 200)",
            height: "1px",
            position: "absolute",
            top: 0,
          }}
        ></div>{" "}
        <Navbar inView={inView} />
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
          <Contact />
        </Element>
      </div>
    </>
  );
}

export default HomePage;
