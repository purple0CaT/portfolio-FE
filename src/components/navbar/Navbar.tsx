import { useMediaQuery } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";
import MobileMenu from "./MobileMenu";
import "./style/NavB.scss";

function Navbar({ inView }: any) {
  const matches = useMediaQuery("(min-width:550px)");
  return (
    <div className={`navBarWrap  ${!inView && "navBarBg"}`}>
      <div className="navBar">
        <Link
          className="logo"
          to="Home"
          smooth={true}
          offset={-1}
          duration={300}
        >
          <img
            src="logo.png"
            alt="Logo"
            style={{ height: "3rem", objectFit: "cover" }}
          />
        </Link>{" "}
        {/* RIGHT MENU */}
        {matches ? (
          <div
            className="d-flex"
            style={{
              gap: "1rem",
            }}
          >
            <Link
              activeClass={inView ? "activeNoBg" : "active"}
              className="navBtns"
              to="Home"
              spy={true}
              smooth={true}
              offset={-48}
              duration={400}
              style={{ color: inView ? "black" : "white" }}
            >
              Home
            </Link>
            <Link
              className="navBtns"
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-48}
              duration={400}
              style={{ color: inView ? "black" : "white" }}
            >
              About
            </Link>
            <Link
              className="navBtns"
              activeClass="active"
              to="Portfolio"
              spy={true}
              smooth={true}
              offset={-48}
              duration={400}
              style={{ color: inView ? "black" : "white" }}
            >
              Portfolio
            </Link>
            <Link
              className="navBtns"
              activeClass="active"
              to="Resume"
              spy={true}
              smooth={true}
              offset={-48}
              duration={400}
              style={{ color: inView ? "black" : "white" }}
            >
              Resume
            </Link>
          </div>
        ) : (
          <MobileMenu />
        )}
      </div>
    </div>
  );
}

export default Navbar;
