import React from "react";
import { Parallax } from "react-parallax";
import "./About.css";

function About() {
  return (
    <div className="aboutWrapper sectionWrapper">
      <h1 className="mx-auto my-auto">About</h1>
      <div style={{ height: "50vh", marginTop: "auto" }}>
        <Parallax
          className="h-100"
          bgImage="bgimg.jpg"
          strength={400}
          bgImageStyle={{ minHeight: "calc( 100vh - 1px )" }}
        >
          Content goes here. Parallax height grows with content height.
        </Parallax>
      </div>
    </div>
  );
}

export default About;
