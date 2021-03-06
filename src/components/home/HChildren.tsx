import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Grid, IconButton, useMediaQuery } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import scrollIntoView from "scroll-into-view";
import { getActivity } from "../../firebase/FbHooks";
import ActivityItem from "./ActivityItem";
//
function HChildren() {
  const [ActivityData, setActivityData] = useState<any | null>(null);
  const match = useMediaQuery("(min-width:900px)");
  const ref: any = useRef();
  //
  const handleScrollTop = () => {
    scrollIntoView(ref.current, {
      time: 300,
      validTarget: function (target: any, parentsScrolled: any) {
        return (
          parentsScrolled < 2 &&
          target !== window &&
          !target.matches(".dontScroll")
        );
      },
    });
  };
  //
  async function loadActivityData() {
    const fetchedData = await getActivity();
    setActivityData(fetchedData);
  }
  //
  useEffect(() => {
    loadActivityData();
  }, []);
  return (
    <Grid
      container
      style={{
        position: "absolute",
        inset: "0 0 auto 0",
        height: "100vh",
        zIndex: 10,
      }}
    >
      {/* LEFT */}

      <Grid
        item
        xs={12}
        md={6}
        className="d-flex align-items-center justify-content-center w-100 dontScroll"
        style={{ height: match ? "100%" : "60%" }}
      >
        <ul className="homeRightColumn shadowCard">
          <div ref={ref}></div>
          <h5 className="activityHeader">Latest Activity</h5>
          {/* Children items */}
          {ActivityData &&
            ActivityData.map((item: any) => (
              <ActivityItem item={item} key={item.id + "home"} />
            ))}
          {/*  Back to TOP */}
          <div className="w-100 d-flex justify-content-center mb-2">
            <IconButton
              color="info"
              onClick={handleScrollTop}
              style={{ backgroundColor: "white" }}
            >
              <ArrowCircleUpIcon />
            </IconButton>
          </div>
        </ul>
      </Grid>
      {/* RIGHT */}
      <Grid
        item
        xs={12}
        md={6}
        className="d-flex align-items-center justify-content-center w-100"
        style={{ minHeight: "40%" }}
      >
        <div className="homeLeftColumn shadowCard">
          <Link
            className="homeNavigationBtn"
            to="About"
            spy={true}
            smooth={true}
            offset={-48}
            duration={400}
          >
            <h5 className="m-0 font-weight-bold">
              About Me{" "}
              <IconButton size="small">
                <ArrowForwardIcon />
              </IconButton>
            </h5>
          </Link>
        </div>
      </Grid>
    </Grid>
  );
}

export default HChildren;
