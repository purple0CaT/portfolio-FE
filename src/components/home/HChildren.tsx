import { Grid } from "@mui/material";
import { Link } from "react-scroll";

//
function HChildren() {
  return (
    <Grid
      container
      className=""
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        className="d-flex align-items-center justify-content-center w-100"
      >
        <div className="homeLeftColumn">
          <Link
            className="homeNavigationBtn"
            to="About"
            spy={true}
            smooth={true}
            offset={-48}
            duration={400}
          >
            <h5 className="m-0">About Me</h5>
          </Link>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        className="d-flex align-items-center justify-content-center w-100 "
      >
        <div className="homeRightColumn">
          <div>Right!</div>
        </div>
      </Grid>
    </Grid>
  );
}

export default HChildren;
