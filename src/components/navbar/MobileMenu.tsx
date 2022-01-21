import { Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";

function MobileMenu() {
  const [ShowBar, setShowBar] = useState(false);
  return (
    <>
      {!ShowBar && (
        <IconButton onClick={() => setShowBar(true)}>
          <MenuIcon style={{ color: "white" }} fontSize="large" />
        </IconButton>
      )}
      <Drawer anchor="top" open={ShowBar} onClose={() => setShowBar(false)}>
        <div className="mobileMenu">
          <Link
            activeClass="active"
            className="navBtns"
            to="Home"
            spy={true}
            smooth={true}
            offset={-48}
            duration={400}
            onClick={() => setShowBar(false)}
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
            onClick={() => setShowBar(false)}
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
            onClick={() => setShowBar(false)}
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
            onClick={() => setShowBar(false)}
          >
            Contact
          </Link>
        </div>
      </Drawer>
    </>
  );
}

export default MobileMenu;
