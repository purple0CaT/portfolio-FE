import { useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import MobileMenu from "./MobileMenu";
import "./NavB.css";

function Navbar({ inView }: any) {
  const matches = useMediaQuery("(min-width:550px)");
  return (
    <div className={`navBarWrap  ${!inView && "navBarBg"}`}>
      <div className="navBar">
        <Link
          activeClass="logo"
          to="Home"
          smooth={true}
          offset={-79}
          duration={300}
        >
          Logo
        </Link>{" "}
        {/* REGULAR SIZE MENU */}
        {matches ? (
          <div className="d-flex" style={{ gap: "1rem" }}>
            <Link
              activeClass="active"
              className="navBtns"
              to="Home"
              spy={true}
              smooth={true}
              offset={-79}
              duration={400}
              // onSetActive={() => handleBg(true)}
              // onSetInactive={() => handleBg(true)}
            >
              Home
            </Link>
            <Link
              className="navBtns"
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-80}
              duration={400}
            >
              About
            </Link>
            <Link
              className="navBtns"
              activeClass="active"
              to="Portfolio"
              spy={true}
              smooth={true}
              offset={-80}
              duration={400}
            >
              Portfolio
            </Link>
            <Link
              className="navBtns"
              activeClass="active"
              to="Resume"
              spy={true}
              smooth={true}
              offset={-80}
              duration={400}
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
