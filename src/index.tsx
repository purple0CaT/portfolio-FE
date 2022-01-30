import "@fontsource/roboto";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import App from "./App";
import AuthProvider from "./firebase/AuthProvider";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
