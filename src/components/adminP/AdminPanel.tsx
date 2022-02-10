import { Drawer, Grid, NoSsr } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminASide from "./AdminASide";
import AdminNavBar from "./AdminNavBar";
import MenuIcon from "@mui/icons-material/Menu";
//
function AdminPanel() {
  const mediaQ = useMediaQuery("(min-width:600px)", { noSsr: true });
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  //
  const toggleDrawer = () => {
    setVisibleDrawer(!visibleDrawer);
  };
  //
  const closeDrawer = () => {
    setVisibleDrawer(false);
  };
  return (
    <Grid container className="h-100">
      <AdminNavBar />
      {mediaQ ? (
        <Grid item sm={3} md={2} xl={1} className="h-100">
          <AdminASide />
        </Grid>
      ) : (
        <>
          <Drawer anchor={"left"} open={visibleDrawer} onClose={toggleDrawer}>
            <AdminASide closeDrawer={closeDrawer} />
            <div
              style={{ backgroundColor: "rgb(138, 81, 109)", height: "3rem" }}
            ></div>
          </Drawer>
          <div className="adminMenuButton" onClick={toggleDrawer}>
            <MenuIcon fontSize="large" />
          </div>
        </>
      )}
      <Grid item xs={12} sm={9} md={10} xl={11} className="pt-5 px-3">
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default AdminPanel;
