import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "@fontsource/roboto";
import { ParallaxProvider } from "react-scroll-parallax";

ReactDOM.render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
