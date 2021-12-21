import React from "react";
import { Link } from "react-scroll";
import "./NavB.css";

function Navbar() {
  return (
    <div className="navBarWrap">
      <div className="p-2 navBar">
        <Link
          activeClass="logo"
          to="Home"
          smooth={true}
          offset={0}
          duration={500}
        >
          Link
        </Link>{" "}
        <div className="d-flex" style={{ gap: "1rem" }}>
          <Link
            activeClass="active"
            className="navBtns"
            to="Home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Home
          </Link>
          <Link
            className="navBtns"
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            About
          </Link>
          <Link
            className="navBtns"
            activeClass="active"
            to="Portfolio"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Portfolio
          </Link>
          <Link
            className="navBtns"
            activeClass="active"
            to="Resume"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
