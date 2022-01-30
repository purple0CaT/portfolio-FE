import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { getActivity } from "../../firebase/FbHooks";
import ActivityItem from "./ActivityItem";
//
function HChildren() {
  const [ActivityData, setActivityData] = useState<any | null>(null);
  //
  async function loadActivityData() {
    const fetchedData = await getActivity();
    setActivityData(fetchedData);
    console.log(fetchedData);
  }
  //
  useEffect(() => {
    loadActivityData();
  }, []);
  return (
    <Grid
      container
      style={{
        height: "100%",
        width: "100%",
        padding: "7rem 0",
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        className="d-flex align-items-center justify-content-center w-100"
        style={{ minHeight: "50%" }}
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
        style={{ minHeight: "50%" }}
      >
        <ul className="homeRightColumn">
          <h5 className="activityHeader">Latest Activity</h5>
          {ActivityData &&
            ActivityData.map((item: any) => (
              <ActivityItem item={item} key={item.id} />
            ))}
        </ul>
      </Grid>
    </Grid>
  );
}

export default HChildren;
