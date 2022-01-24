import { Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
//
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
          {/* === LOGO */}
          <div className="mobileMenuLogo">
            <div className="logo-flip">
              <div className="logo-flip__inner">
                <div className="logo-flip-front">
                  <img src="/logo.png" alt="Logo" style={{ height: "65px" }} />
                </div>
                <div className="logo-flip-back">
                  <img
                    src="/memes/doggeP.png"
                    alt="Logo"
                    style={{ height: "65px" }}
                  />
                </div>
              </div>
            </div>
            <IconButton onClick={() => setShowBar(false)}>
              <CancelIcon fontSize="large" />
            </IconButton>
          </div>
          {/* === Links */}
          <Link
            activeClass="active"
            className="navBtns"
            to="Home"
            spy={true}
            smooth={true}
            offset={-49}
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
            offset={-49}
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
            offset={-49}
            duration={400}
            onClick={() => setShowBar(false)}
          >
            Portfolio
          </Link>
          <Link
            className="navBtns"
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={-49}
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
