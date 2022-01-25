import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "@fontsource/roboto";
import { ParallaxProvider } from "react-scroll-parallax";
import AuthProvider from "./firebase/AuthProvider";

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
