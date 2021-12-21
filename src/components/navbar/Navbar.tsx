import React from "react";
import { Link } from "react-scroll";
import "./NavB.css";

function Navbar() {
  return (
    <div className="navBarWrap">
      <div className="navBar">
        <Link
          activeClass="logo"
          to="Home"
          smooth={true}
          offset={0}
          duration={300}
        >
          Logo
        </Link>{" "}
        <div className="d-flex" style={{ gap: "1rem" }}>
          <Link
            activeClass="active"
            className="navBtns"
            to="Home"
            spy={true}
            smooth={true}
            offset={0}
            duration={400}
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
      </div>
    </div>
  );
}

export default Navbar;
