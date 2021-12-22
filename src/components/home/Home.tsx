import React from "react";
import "./Home.css";
import { Parallax } from "react-parallax";

function Home() {
  return (
    <div className="homeWrapper ">
      <Parallax
        className="h-100"
        bgImage="bgimg.jpg"
        strength={400}
        bgImageStyle={{ minHeight: "calc( 100vh - 1px )" }}
      >
        Content goes here. Parallax height grows with content height.
      </Parallax>
      {/* <h1>Home</h1> */}
    </div>
  );
}

export default Home;
